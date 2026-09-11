import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.article)`
  display: flex;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 16px;
  overflow: hidden;
  height: ${({ $height }) => $height || "43rem"};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  /* Switch between horizontal and vertical layouts */
  flex-direction: ${({ $layout, $reverse }) => 
    $layout === 'horizontal' 
      ? ($reverse ? 'row-reverse' : 'row') 
      : 'column'
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* Always collapse to a standard vertical card on small screens */
    flex-direction: column;
  }
`;

export const MediaContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ $layout }) => $layout === 'horizontal' ? '0 1.8rem 1.8rem 0' : '1.8rem 1.8rem 0 0'};

  
  /* Manage sizing based on layout */
  ${({ $layout }) => 
    $layout === 'horizontal' 
      ? css`
          flex: 0 0 40%; /* Takes up 40% of the card width */
          min-height: 100%;
        ` 
      : css`
          width: 100%;
          aspect-ratio: 16 / 9; /* Standard widescreen ratio for vertical cards */
        `
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: none;
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

// Inner wrapper for Framer Motion zoom on hover
export const MediaZoomWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MediaImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  ${CardWrapper}:hover & {
    opacity: .6;
  }
`;

export const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MediaIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  border-radius: 16px;
  padding: 2.5rem 3rem;
  border-right: 5px solid var(--primary-color);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  /* Optional line-clamping if you want consistent heights */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ActionLink = styled.a`
  margin-top: auto; /* Pushes the button to the bottom if content is short */
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  &:hover {
    text-decoration: underline;
  }
`;