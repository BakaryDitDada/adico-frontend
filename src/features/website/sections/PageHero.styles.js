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
  background-color: ${({ theme }) => theme.colors.common.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
    min-height: 40vh;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  /* Cinematic deep overlay for high-contrast text readability */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
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
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.gray[200]};
  line-height: ${({ theme }) => theme.lineHeights.body};
  max-width: 600px;
  
  ${({ $align }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.body};
  }
`;