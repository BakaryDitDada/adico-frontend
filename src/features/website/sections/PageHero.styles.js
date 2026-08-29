import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
  padding: ${({ theme }) => `${theme.spacing.huge} ${theme.spacing.xxl}`};
  overflow: hidden;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.colors.common.black};
  border-radius: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
    min-height: 40vh;
  }
`;

export const BackgroundMedia = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* Will-change optimizes the continuous animation performance */
  will-change: transform; 
`;

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;

export const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const BgIframe = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  min-height: 100%;
  min-width: 177.77vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border: none;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none; /* Prevents the overlay from blocking text selection */
  /* Darkened the gradient for guaranteed text legibility */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2; /* Firmly places text above the overlay */
  max-width: ${({ theme }) => theme.layout.contentMax};
  width: 100%;
  margin: 0 auto;
  text-align: ${({ $align }) => $align};
`;

export const Subtitle = styled(motion.span)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primaryLight};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  .subtitle {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    // color: ${({ theme }) => theme.colors.secondary};
    background: rgba(255, 255, 255, 0.1);
    padding: .8rem 2rem;
    border-radius: 5rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    backdrop-filter: blur(10px);
    transform: translateX(${({ active }) => active ? 0 : '-20px'});
    transition: all 0.5s ease 0.4s;
  }

`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  color: ${({ theme }) => theme.colors.common.white};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  
  ${({ $align }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;

export const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray[200]};
  line-height: ${({ theme }) => theme.lineHeights.body};
  max-width: 600px;
  
  ${({ $align }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.body};
  }
`;