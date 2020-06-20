import { css } from 'styled-components';
import theme from './theme';

// ${media.tablet`
//   background-color: aqua;
// `}
export const media = Object.keys(theme.breakpointsMixin).reduce(
  (acc: { [key: string]: Function }, key) => {
    acc[key] = (...rest: any) => css`
      @media (min-width: ${theme.breakpointsMixin[key]}) {
        // @ts-ignore
        ${css(...rest)};
      }
    `;
    return acc;
  },
  {}
);
