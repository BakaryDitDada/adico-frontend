import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.text.primary};
  transition: color ${({ theme }) => theme.motion.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  .required-asterisk {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  height: 4.4rem;
  transition: all ${({ theme }) => theme.motion.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primaryLight};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => 
      $hasError ? `${theme.colors.error}20` : `${theme.colors.primary}20`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.light};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.borderSecondary};
  }

  ${({ $iconStart, theme }) => $iconStart && css`
    padding-left: 4rem;
  `}

  ${({ $iconEnd, theme }) => $iconEnd && css`
    padding-right: 4rem;
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 3.4rem; /* Adjusted for label height + gap */
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  ${({ $position }) => $position === 'start' ? css`
    left: ${({ theme }) => theme.spacing.md};
  ` : css`
    right: ${({ theme }) => theme.spacing.md};
  `}
`;

export const HelperText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.xxs};
`;

export const ErrorMessage = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;