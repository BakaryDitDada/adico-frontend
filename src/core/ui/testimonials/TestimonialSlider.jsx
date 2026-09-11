'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './TestimonialSlider.styles';

const QuoteSVG = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

const AUTOPLAY_INTERVAL = 5000;

export default function TestimonialSlider({ testimonials = [] }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const hasTestimonials = Array.isArray(testimonials) && testimonials.length > 0;

  const index = hasTestimonials
    ? ((page % testimonials.length) + testimonials.length) % testimonials.length
    : 0;

  const paginate = (newDirection) => {
    if (!hasTestimonials) return;

    setPage(([currentPage]) => [
      currentPage + newDirection,
      newDirection,
    ]);
  };

  const jumpTo = (newIndex) => {
    if (!hasTestimonials) return;

    const newDirection = newIndex > index ? 1 : -1;

    setPage([newIndex, newDirection]);
  };

  // Autoplay
  useEffect(() => {
    if (!hasTestimonials || isPaused || testimonials.length <= 1) return;

    const autoplayId = setInterval(() => {
      setPage(([currentPage]) => [currentPage + 1, 1]);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplayId);
  }, [hasTestimonials, isPaused, testimonials.length]);

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (!hasTestimonials) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      paginate(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      paginate(1);
    }
  };

  if (!hasTestimonials) return null;

  return (
    <S.SliderWrapper
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      aria-label="Slider de témoignages"
    >
      <S.SliderViewport>
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <S.QuoteCard
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: 'tween',
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.35,
                ease: 'easeOut',
              },
            }}
          >
            <S.QuoteIcon>
              <QuoteSVG />
            </S.QuoteIcon>

            <S.QuoteText>
              &ldquo;{testimonials[index].quote}&rdquo;
            </S.QuoteText>

            <S.AuthorContainer>
              {testimonials[index].avatar && (
                <S.Avatar
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                />
              )}

              <S.AuthorDetails>
                <S.AuthorName>
                  {testimonials[index].name}
                </S.AuthorName>

                <S.AuthorRole>
                  {testimonials[index].role}
                </S.AuthorRole>
              </S.AuthorDetails>
            </S.AuthorContainer>
          </S.QuoteCard>
        </AnimatePresence>
      </S.SliderViewport>

      <S.ControlsContainer>
        <S.ArrowButton
          onClick={() => paginate(-1)}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft />
        </S.ArrowButton>

        <S.DotsContainer>
          {testimonials.map((_, dotIndex) => (
            <S.Dot
              key={dotIndex}
              $active={dotIndex === index}
              onClick={() => jumpTo(dotIndex)}
              aria-label={`Aller au témoignage ${dotIndex + 1}`}
            />
          ))}
        </S.DotsContainer>

        <S.ArrowButton
          onClick={() => paginate(1)}
          aria-label="Témoignage suivant"
        >
          <ChevronRight />
        </S.ArrowButton>
      </S.ControlsContainer>
    </S.SliderWrapper>
  );
}
