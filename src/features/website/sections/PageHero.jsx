'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as S from './PageHero.styles';

// Animation variants for staggered children
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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth, cinematic ease-out
  },
};

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = '/images/default-hero.jpg', 
  align = 'left' 
}) {
  return (
    <S.HeroWrapper $align={align}>
      {/* Background image scale animation on load */}
      <S.BackgroundImage 
        $bgImage={backgroundImage} 
        as={motion.div}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      
      <S.ContentContainer 
        $align={align}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subtitle && (
          <S.Subtitle variants={itemVariants}>
            {subtitle}
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