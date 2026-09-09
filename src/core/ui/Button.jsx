import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

// ==========================================
// 1. SPINNER & ANIMATIONS
// ==========================================
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledSpinner = styled.svg`
  animation: ${spin} 1s linear infinite;
  height: 1.2em;
  width: 1.2em;
`;

// A clean, Tailwind-style SVG spinner that inherits text color
const SpinnerIcon = () => (
  <StyledSpinner xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </StyledSpinner>
);

// ==========================================
// 2. STYLED COMPONENTS
// ==========================================
const StyledButton = styled.button`
  /* Layout */
  position: relative; /* Crucial for absolute positioning the spinner */
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left': return 'flex-start';
      case 'right': return 'flex-end';
      default: return 'center';
    }
  }};
  
  /* Typography & Borders */
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  
  /* Interactions */
  cursor: pointer;
  border: none;
  outline: none;
  transition: all ${({ theme }) => theme.motion.fast};

  /* Disabled State - Now also triggers on loading */
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    /* Optional: prevent hover effects when disabled/loading */
    pointer-events: none; 
  }

  /* Sizes */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'sm':
        return css`padding: ${theme.spacing.xs} ${theme.spacing.sm}; font-size: ${theme.fontSizes.sm};`;
      case 'lg':
        return css`padding: ${theme.spacing.md} ${theme.spacing.xl}; font-size: ${theme.fontSizes.bodyLg};`;
      default:
        return css`padding: ${theme.spacing.sm} ${theme.spacing.md}; font-size: ${theme.fontSizes.body};`;
    }
  }}

  /* Variants (Kept exactly the same as your original) */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary': return css`background-color: ${theme.colors.secondary}; color: ${theme.colors.common.white};`;
      case 'outline': return css`background-color: transparent; border: 1px solid ${theme.colors.border}; color: ${theme.colors.text.primary};`;
      case 'ghost': return css`background-color: transparent; color: ${theme.colors.text.secondary};`;
      default: return css`background-color: ${theme.colors.primary}; color: ${theme.colors.common.white};`;
    }
  }}
`;

const ContentWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: inherit;
  /* Hides the content but keeps its physical dimensions in the DOM */
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
`;

const SpinnerCenter = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Centers the spinner perfectly inside the relative parent */
  left: 50%;
  transform: translateX(-50%);
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em; 
`;

// ==========================================
// 3. THE REACT COMPONENT
// ==========================================
export const Button = forwardRef(({
  children,
  size = 'md',
  variant = 'primary',
  align = 'center',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...rest
}, ref) => {
  // The button should be unclickable if it is explicitly disabled OR currently loading
  const isDisabled = disabled || isLoading;

  return (
    <StyledButton
      ref={ref}
      $size={size}
      $variant={variant}
      $align={align}
      $fullWidth={fullWidth}
      disabled={isDisabled}
      {...rest}
    >
      {/* Absolute centered spinner */}
      {isLoading && (
        <SpinnerCenter>
          <SpinnerIcon />
        </SpinnerCenter>
      )}

      {/* Visually hidden content that maintains button width */}
      <ContentWrapper $isLoading={isLoading}>
        {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
        {children}
        {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
      </ContentWrapper>
    </StyledButton>
  );
});

Button.displayName = 'Button';