import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.elements.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.elements.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.elements.h1.lineHeight};
  color: ${({ theme, $color }) => $color || theme.colors.text.primary};
  margin-bottom: ${({ theme, $noMargin }) => ($noMargin ? '0' : theme.spacing.lg)};
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.elements.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.elements.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.elements.h2.lineHeight};
  color: ${({ theme, $color }) => $color || theme.colors.text.primary};
  margin-bottom: ${({ theme, $noMargin }) => ($noMargin ? '0' : theme.spacing.md)};
`;

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.elements.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.elements.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.elements.h3.lineHeight};
  color: ${({ theme, $color }) => $color || theme.colors.text.primary};
  margin-bottom: ${({ theme, $noMargin }) => ($noMargin ? '0' : theme.spacing.md)};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.elements.p.fontSize};
  font-weight: ${({ theme }) => theme.typography.elements.p.fontWeight};
  line-height: ${({ theme }) => theme.typography.elements.p.lineHeight};
  color: ${({ theme, $variant }) => 
    $variant === 'secondary' ? theme.colors.text.secondary : 
    $variant === 'light' ? theme.colors.text.light : 
    theme.colors.text.primary};
  margin-bottom: ${({ theme, $noMargin }) => ($noMargin ? '0' : theme.spacing.md)};
`;