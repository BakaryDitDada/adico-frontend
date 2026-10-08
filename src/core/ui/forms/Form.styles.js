import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  /* Layout variations */
  ${({ $layout, theme }) => {
    switch ($layout) {
      case 'horizontal':
        return css`
          flex-direction: row;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: ${theme.spacing.lg};
        `;
      case 'grid':
        return css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: ${theme.spacing.lg};
        `;
      case 'vertical':
      default:
        return css`
          gap: ${theme.spacing.lg};
        `;
    }
  }}

  /* Spacing applied to form sections if nested */
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }

  /* Footer action area styling */
  .form-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.xl};
    padding-top: ${({ theme }) => theme.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  }
`;

export const FormCard = styled.div`
  // background-color: ${({ theme }) => theme.colors.surface.card};
  background-color: ${({ theme, $isTransparent }) => $isTransparent ? "transparent" : theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  height: 4.4rem;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.motion.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.light};
    cursor: not-allowed;
  }
`;

export const AlertMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  background-color: ${({ $variant, theme }) => 
    $variant === 'success' ? `${theme.colors.success}15` : `${theme.colors.error}15`};
  color: ${({ $variant, theme }) => 
    $variant === 'success' ? theme.colors.secondaryDark : theme.colors.error};
  border: 1px solid ${({ $variant, theme }) => 
    $variant === 'success' ? `${theme.colors.success}30` : `${theme.colors.error}30`};
`;