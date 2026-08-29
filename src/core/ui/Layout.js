import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme, $maxWidth }) => $maxWidth || theme.layout.contentMax};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const Section = styled.section`
  padding: ${({ theme, $padding = 'xl' }) => theme.spacing[$padding]} 0;
  background-color: ${({ theme, $bg }) => $bg || 'transparent'};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  align-items: ${({ $align = 'flex-start' }) => $align};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  gap: ${({ theme, $gap = 'md' }) => theme.spacing[$gap]};
  flex-wrap: ${({ $wrap = 'nowrap' }) => $wrap};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = '1fr' }) => $columns};
  gap: ${({ theme, $gap = 'md' }) => theme.spacing[$gap]};
  width: 100%;
`;