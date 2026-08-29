import styled, { keyframes, css } from 'styled-components';

// Animations
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slowZoom = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
`;

// Containers
export const HeroSliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 85vh; /* Standard modern hero height, adjust as needed */
  min-height: 600px;
  overflow: hidden;
  background-color: #000;
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  z-index: ${({ $isActive }) => ($isActive ? 1 : 0)};

  /* Trigger zoom only when active */
  ${({ $isActive }) => $isActive && css`
    & > div:first-child, & > video {
      animation: ${slowZoom} 10s ease-out forwards;
    }
  `}
`;

// Backgrounds
export const ImageBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

export const VideoBackground = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
`;

// Gradient Overlay for Text Readability
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $color, $opacity }) => 
    $color ? `rgba(0, 0, 0, ${$opacity || 0.5})` : 
    'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)'};
  z-index: 2;
`;

// Content & Typography
export const SlideContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $alignment }) => 
    $alignment === 'center' ? 'center' : 
    $alignment === 'right' ? 'flex-end' : 'flex-start'};
  text-align: ${({ $alignment }) => $alignment || 'left'};
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  color: #ffffff;

  .subtitle {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.secondary};
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

export const SlideTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-wrap: balance;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
`;

export const SlideSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.body};
  max-width: 600px;
  margin-bottom: 2.5rem;
  color: #f5f5f5;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

// Calls to Action
export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ $size }) => ($size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem')};
  font-size: ${({ theme, $size }) => ($size === 'large' ? theme.fontSizes.caption : theme.fontSizes.xs)};
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ $variant }) => $variant === 'outline' ? css`
    background: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;

    &:hover {
      background: #ffffff;
      color: #000000;
    }
  ` : css`
    background: #0056b3; /* Primary NGO Blue - adjust to ADICO branding */
    color: #ffffff;
    border: 2px solid #0056b3;

    &:hover {
      background: #004494;
      border-color: #004494;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  `}
`;

// Navigation Controls
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &.prev { left: 2rem; }
  &.next { right: 2rem; }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    display: none; /* Hide arrows on mobile for cleaner UI */
  }
`;

export const NavigationButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
`;

export const DotButton = styled.button`
  width: ${({ $isActive }) => ($isActive ? '2rem' : '0.5rem')};
  height: 0.5rem;
  border-radius: 1rem;
  background: ${({ $isActive }) => ($isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: #ffffff;
  }
`;