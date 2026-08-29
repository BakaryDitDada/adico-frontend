'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  HeroSliderContainer,
  Slide,
  ImageBackground,
  VideoBackground,
  Overlay,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  CTAButtons,
  CTAButton,
  NavigationButtons,
  DotButton,
  ArrowButton
} from './HeroSlider.styles';

const HeroSlider = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = config?.slides?.filter(slide => slide.published) || [];

  useEffect(() => {
    if (!config?.autoplay || isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, config.interval || 5000);

    return () => clearInterval(interval);
  }, [config?.autoplay, config?.interval, isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <HeroSliderContainer 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="hero-slider"
      aria-label="Hero Carousel"
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <Slide key={slide.id || index} $isActive={isActive}>
            {/* Background Layer */}
            {slide.background.type === 'image' ? (
              <ImageBackground $src={slide.background.src} />
            ) : slide.background.videoType === 'embedded' && slide.background.embedCode ? (
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}
                dangerouslySetInnerHTML={{ __html: slide.background.embedCode }}
              />
            ) : (
              <VideoBackground
                autoPlay
                muted={slide.background.muted ?? true}
                loop={slide.background.loop ?? true}
                poster={slide.background.poster}
                playsInline
              >
                <source src={slide.background.src} type="video/mp4" />
              </VideoBackground>
            )}

            {/* Tint Overlay */}
            <Overlay 
              $color={slide.background.overlayColor} 
              $opacity={slide.background.overlayOpacity} 
            />

            {/* Content Layer (Keyed to currentSlide to restart animations) */}
            <SlideContent key={`content-${currentSlide}`} $alignment={slide.contentAlignment}>
              {slide.subtitle && (
                <span className="subtitle">{slide.subtitle}</span>
              )}
              
              <SlideTitle>{slide.title}</SlideTitle>
              
              {slide.description && (
                <SlideSubtitle>{slide.description}</SlideSubtitle>
              )}
              
              {slide.ctas && slide.ctas.length > 0 && (
                <CTAButtons>
                  {slide.ctas.map((cta, ctaIndex) => (
                    <CTAButton
                      key={ctaIndex}
                      href={cta.href}
                      $variant={cta.variant}
                      $size={cta.size}
                    >
                      {cta.text} 
                      {cta.variant !== 'outline' && <ArrowRight size={18} />}
                    </CTAButton>
                  ))}
                </CTAButtons>
              )}
            </SlideContent>
          </Slide>
        );
      })}

      {/* Navigation Controls */}
      {config?.showArrows && slides.length > 1 && (
        <>
          <ArrowButton 
            className="prev" 
            onClick={prevSlide} 
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </ArrowButton>
          <ArrowButton 
            className="next" 
            onClick={nextSlide} 
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </ArrowButton>
        </>
      )}

      {/* Pagination Controls */}
      {config?.showDots && slides.length > 1 && (
        <NavigationButtons>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              $isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </NavigationButtons>
      )}
    </HeroSliderContainer>
  );
};

export default HeroSlider;