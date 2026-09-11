'use client';

import React from 'react';
import * as S from './ContentCard.styles';
import { useTheme } from 'styled-components';

// Helper to extract YouTube ID
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
};

export default function ContentCard({
  children,
  title,
  description,
  image,
  video,
  youtube,
  layout = 'vertical', // 'vertical' | 'horizontal'
  reverse = false, // Flips image/text sides if horizontal
  ctaText,
  ctaLink,
  height
}) {
  const youtubeId = getYouTubeId(youtube);
  const hasMedia = image || video || youtubeId;

  const theme = useTheme();

  return (
    <S.CardWrapper
      $layout={layout}
      $reverse={reverse}
      // whileHover="hover" // Triggers 'hover' variant on children
      initial={{ y: 0, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)' }}
      whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)', borderColor: `${theme.colors.border}` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      $height={height}
    >
      {hasMedia && (
        <S.MediaContainer $layout={layout}>
          <S.MediaZoomWrapper
            variants={{
              hover: { scale: 1.05 }, // Zooms media smoothly when card is hovered
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {youtubeId ? (
              <S.MediaIframe
                src={`https://www.youtube.com/embed/${youtubeId}?controls=1&showinfo=0&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : video ? (
              <S.MediaVideo autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
              </S.MediaVideo>
            ) : (
              <>
                <S.MediaImage src={image} alt={title} />
                <S.MediaImageOverlay />
              </>
            )}
          </S.MediaZoomWrapper>
        </S.MediaContainer>
      )}

      <S.ContentContainer>
        {title && <S.Title>{title}</S.Title>}
        {description && <S.Description>{description}</S.Description>}

        {children}
        
        {/* Render a Call to Action if provided */}
        {ctaText && ctaLink && (
          <S.ActionLink href={ctaLink}>
            {ctaText} &rarr;
          </S.ActionLink>
        )}
      </S.ContentContainer>
    </S.CardWrapper>
  );
}