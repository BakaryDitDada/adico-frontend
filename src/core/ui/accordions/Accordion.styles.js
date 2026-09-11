import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionContainer = styled.div`
  width: ${({ $width }) => $width || '100%'};
  max-width: 800px;
  margin: ${({ $margin }) => $margin || '0 auto'};
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  gap: 1rem; /* Adds breathing room between items */
`;

export const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary || '#ffffff'}; 
  border: 1px solid ${({ theme }) => theme.colors.border || '#e0e0e0'};
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  /* Subtle highlight on hover */
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary || '#007bff'};
    box-shadow: ${({ theme }) => theme.shadows.lg || '0 4px 12px rgba(0, 0, 0, 0.05)'};
  }
`;

export const HeaderButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.colors.text.light || '#333333'};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: 600;
  
  /* Removes default button outlines but keeps focus for accessibility */
  &:focus-visible {
    outline: 2px solid var(--primary-color, #007bff);
    outline-offset: -2px;
  }
`;

export const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $color }) => $color || theme.colors.primary};
  flex-shrink: 0;
  margin-left: 1rem;
`;

export const ContentWrapper = styled(motion.div)`
  overflow: hidden;
`;

export const ContentInner = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  // color: var(--text-secondary, #555555);
  color: ${({ theme}) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
`;