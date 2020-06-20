import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme: { [key: string]: any } = {
  fontSize: ['14px'],
  breakpoints: [768, 1180],
  breakpointsMixin: {
    tablet: '768px',
    desktop: '1180px'
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    alto: '#D0D0D0',
    baseText: '#303952',
    green: '#27ae60'
  }
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
