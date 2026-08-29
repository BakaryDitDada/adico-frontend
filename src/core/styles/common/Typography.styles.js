'use client';

import styled from 'styled-components';

// Heading 1
export const Heading1 = styled.h1`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.h1};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.h1};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text.primary};
    margin: 0 0 ${theme.spacing.md};
  `}
`;

// Heading 2
export const Heading2 = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.h2ze};
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.h2};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text.primary};
    margin: 0 0 ${theme.spacing.sm};
  `}
`;

// Heading 3
export const Heading3 = styled.h3`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.h3};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.h3};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text.primary};
    margin: 0 0 ${theme.spacing.sm};
  `}
`;

// Paragraph
export const Paragraph = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.body};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text.secondary};
    margin: 0 0 ${theme.spacing.md};
  `}
`;

// Small text
export const SmallText = styled.small`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.lineHeights.small};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text.light};
  `}
`;
