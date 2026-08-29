import styled, { css } from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: all ${({ theme }) => theme.motion.normal};
  
  /* Dynamic Padding */
  padding: ${({ theme, $padding = 'md' }) => 
    $padding === 'none' ? '0' : theme.spacing[$padding]};

  /* Variants */
  ${({ $variant = 'default', theme }) => {
    switch ($variant) {
      case 'elevated':
        return css`
          box-shadow: ${theme.shadows.medium};
          border: 1px solid transparent;
        `;
      case 'outlined':
        return css`
          box-shadow: none;
          border: 1px solid ${theme.colors.border};
        `;
      default: // default
        return css`
          box-shadow: ${theme.shadows.sm};
          border: 1px solid ${theme.colors.borderSecondary};
        `;
    }
  }}
`;