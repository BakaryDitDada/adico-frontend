import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TogglerContainer = styled.div`
  display: flex;
  gap: 4px; /* Tighter gap for the segmented control look */
  
  /* Apple Glass Effect */
  background: ${({ theme }) => theme.colors.background.secondary}B3; /* Adds 70% opacity */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  padding: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const TogglerButton = styled.button`
  position: relative; /* Crucial: traps the absolute ActiveBackground inside */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1; /* Establishes stacking context */
  
  /* Icon color transition */
  color: ${({ theme, $isActive }) => 
    $isActive ? '#ffffff' : theme.colors.text.secondary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme, $isActive }) => 
      $isActive ? '#ffffff' : theme.colors.text.primary};
  }

  svg {
    position: relative;
    z-index: 2; /* Ensures icon stays above the sliding bubble */
  }
`;

export const ActiveBackground = styled(motion.div)`
  position: absolute;
  // inset: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1; /* Sits behind the icon (z-index 2) but above button background */
  
  /* Optional: soft glowing shadow matching your primary color */
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}60;

  // transition: none !important;
`;

// import styled from 'styled-components';

// export const TogglerContainer = styled.div`
//   display: flex;
//   gap: 8px;
//   background: ${({ theme }) => theme.colors.background.secondary};
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: 9999px;
//   padding: 4px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
// `;

// export const TogglerButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background: transparent;
//   border: none;
//   color: ${({ theme }) => theme.colors.text.secondary};
//   cursor: pointer;
//   transition: all 0.4s ease-in-out;
  
//   &:hover {
//     background: ${({ theme }) => theme.colors.background.tertiary};
//     color: ${({ theme }) => theme.colors.text.primary};
//   }
  
//   &.active {
//     background: ${({ theme }) => theme.colors.primary};
//     color: white;
    
//     &:hover {
//       background: ${({ theme }) => theme.colors.primaryDark};
//       color: white;
//     }
//   }
// `;
