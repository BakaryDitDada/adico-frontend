import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  
  cursor: pointer;
  border: none;
  outline: none;
  transition: all ${({ theme }) => theme.motion.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  /* Disabled State */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Sizes */
  ${({ $size = 'md', theme }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.fontSizes.sm};
        `;
      case 'lg':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSizes.bodyLg};
        `;
      default: // md
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSizes.body};
        `;
    }
  }}

  /* Variants */
  ${({ $variant = 'primary', theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.neutral.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.text.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.secondary};
            border-color: ${theme.colors.primary};
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.secondary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.tertiary};
            color: ${theme.colors.text.primary};
          }
        `;
      default: // primary
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.neutral.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
            box-shadow: ${theme.shadows.sm};
          }
        `;
    }
  }}
`;

export const IconButton = styled(Button)`
  padding: ${({ theme, $size = 'md' }) => 
    $size === 'sm' ? theme.spacing.xs : 
    $size === 'lg' ? theme.spacing.md : 
    theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
`;