// ### The Perfected Code
'use client';

import { createGlobalStyle, css } from 'styled-components';
import responsive from './Responsive';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light mode defaults */
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #3b82f6;
    --background-primary: #ffffff;
    --background-secondary: #f9fafb;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --border-color: #e5e7eb;
  }

  .dark {
    /* Dark mode overrides */
    --primary-color: #3b82f6;
    --primary-dark: #60a5fa;
    --primary-light: #1d4ed8;
    --background-primary: #111827;
    --background-secondary: #1f2937;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --border-color: #4b5563;
  }

  /* Include pseudo-elements in the box-sizing reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1 rem = 10px; 10px/16px = 62.5% */
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Fixed: Standard CSS syntax inside the css helper */
    ${responsive(css`font-size: 75%;`, "xl")}   /* Width > 1200 */
    ${responsive(css`font-size: 56.25%;`, "lg")} /* Width < 1200 */
    ${responsive(css`font-size: 50%;`, "md")}   /* Width < 900 */
  }

  body {
    font-family: ${({ theme }) => theme.fonts?.primary || 'inherit'};
    font-size: ${({ theme }) => theme.fontSizes?.base || '1.6rem'}; 
    font-weight: ${({ theme }) => theme.fontWeights?.normal || '400'};
    background-color: ${({ theme }) => theme.colors?.background?.primary || 'var(--background-primary)'};
    color: ${({ theme }) => theme.colors?.text?.primary || 'var(--text-primary)'};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    /* Fixed: Prevents horizontal scroll breaking, but allows vertical scrolling */
    // overflow-x: hidden; 
    overflow: hidden; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeights?.bold || '700'};
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Added: Normalize lists, inputs, and media */
  ul, ol {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  /* Modern Effects */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1ce3cf, #f9e50c, #e70c34);
    transform-origin: 0%;
    z-index: 9999;
  }

  /* Scroll Bar - Modern Firefox & Standards */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors?.borderLight || 'var(--border-color)'} transparent;
  }

  /* Scroll Bar - Webkit (Chrome, Safari, Edge) */
  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors?.border || 'var(--border-color)'};
    border-radius: 999px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors?.borderLight || 'var(--text-secondary)'};
  }

  /* *************************
   * Keyframes for animations
   * ************************* */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes glitch {
    0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
    5% { clip-path: inset(92% 0 1% 0); transform: translate(2px, -2px); }
    10% { clip-path: inset(43% 0 1% 0); transform: translate(-2px, 2px); }
    15% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
    20% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 2px); }
    45% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -2px); }
    50% { clip-path: inset(98% 0 1% 0); transform: translate(-2px, 2px); }
    55% { clip-path: inset(67% 0 30% 0); transform: translate(2px, -2px); }
    60% { clip-path: inset(84% 0 6% 0); transform: translate(-2px, 2px); }
    65% { clip-path: inset(63% 0 20% 0); transform: translate(2px, -2px); }
    70% { clip-path: inset(76% 0 8% 0); transform: translate(-2px, 2px); }
    75% { clip-path: inset(86% 0 5% 0); transform: translate(2px, -2px); }
    80% { clip-path: inset(59% 0 28% 0); transform: translate(-2px, 2px); }
    85% { clip-path: inset(95% 0 3% 0); transform: translate(2px, -2px); }
    90% { clip-path: inset(71% 0 19% 0); transform: translate(-2px, 2px); }
    95% { clip-path: inset(88% 0 6% 0); transform: translate(2px, -2px); }
    100% { clip-path: inset(100% 0 0 0); transform: translate(0); }
  }
  
  @keyframes gradient-flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default GlobalStyles;