import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border || '#e0e0e0'};
  overflow-x: auto; /* Allows scrolling on mobile */
  
  /* Hides the scrollbar for a cleaner look while keeping functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TabButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: 600;
  /* Active text gets the primary color, inactive gets the secondary text color */
  color: ${({ theme,$isActive }) => 
    $isActive ? theme.colors.primary || '#007bff' : theme.colors.text.light || '#333333'};
  cursor: pointer;
  white-space: nowrap; /* Prevents text from wrapping on small screens */
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#007bff'};
  }

  /* Accessibility focus ring */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary || "#007bff"};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px; /* Pulls it down to perfectly cover the border-bottom */
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary || '#007bff'};
  border-radius: 2px 2px 0 0;
`;

export const TabPanelWrapper = styled.div`
  padding: 2rem 0;
  overflow: hidden;
`;

export const TabContent = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.light || '#333333'};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
`;