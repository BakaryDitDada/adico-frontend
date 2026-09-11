import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const SliderViewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  // padding: ${({ theme }) => theme.spacing.xl} 0;
  
  /* Critical: Container must have height since children are position: absolute */
  min-height: 30rem; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 420px;
  }
`;

export const QuoteCard = styled(motion.div)`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* UX Improvements for Dragging */
  cursor: grab;
  user-select: none;
  touch-action: pan-y; /* Allows vertical scrolling on touch devices while intercepting horizontal swipes */

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    /* Uncommented and fixed string interpolation if you want dynamic border hover */
    /* border-color: ${({ theme }) => theme.colors.primary}; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.primaryLight};
  opacity: 0.3;
  margin-bottom: -${({ theme }) => theme.spacing.lg};
  pointer-events: none; 
`;

export const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.light};
  line-height: ${({ theme }) => theme.lineHeights.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-style: italic;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.body};
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  pointer-events: none; /* Prevents image drag ghosting */
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radii.full};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.borderSecondary};
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.light};
  margin: 0;
`;

export const AuthorRole = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  // margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ArrowButton = styled.button`
  background: ${({ theme }) => theme.colors.surface.elevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.light};
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.motion.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.hover};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.borderSecondary};
  cursor: pointer;
  transition: background ${({ theme }) => theme.motion.fast}, transform 0.2s ease;

  /* Slightly grow active dot */
  transform: ${({ $active }) => $active ? 'scale(1.2)' : 'scale(1)'};

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.primary : theme.colors.text.light};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;