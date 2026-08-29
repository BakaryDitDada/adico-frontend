'use client';

import React from 'react';
import * as S from './PageHero.styles';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
};

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  bgImage,
  bgVideo,
  bgYouTube,
  bgColor,
  align = 'left' 
}) {
  const youtubeId = getYouTubeId(bgYouTube);
  const hasMedia = bgImage || bgVideo || youtubeId;

  return (
    <S.HeroWrapper $align={align} $bgColor={bgColor}>
      
      {hasMedia && (
        <S.BackgroundMedia
          // Continuous slow zoom in and zoom out effect
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 30, // 30 seconds for a full cycle creates a premium, subtle feel
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {youtubeId ? (
            <S.BgIframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1`}
              allow="autoplay; encrypted-media"
              tabIndex="-1"
            />
          ) : bgVideo ? (
            <S.BgVideo autoPlay loop muted playsInline>
              <source src={bgVideo} type="video/mp4" />
            </S.BgVideo>
          ) : (
            <S.BgImage $src={bgImage} />
          )}
        </S.BackgroundMedia>
      )}

      {/* Overlay renders above the media, but below the text container */}
      {hasMedia && <S.Overlay />}
      
      <S.ContentContainer 
        $align={align}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subtitle && (
          <S.Subtitle variants={itemVariants}>
            <span className="subtitle">{subtitle}</span>
          </S.Subtitle>
        )}
        
        <S.Title variants={itemVariants} $align={align}>
          {title}
        </S.Title>
        
        {description && (
          <S.Description variants={itemVariants} $align={align}>
            {description}
          </S.Description>
        )}
      </S.ContentContainer>
    </S.HeroWrapper>
  );
}