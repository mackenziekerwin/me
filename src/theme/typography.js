import styled, { css } from 'styled-components';

import { PRIMARY_ORANGE, min } from './constants';

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;

  ${min.DESKTOP_SMALL} {
    font-size: 3rem;
    line-height: 3.75rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;

  ${min.DESKTOP_SMALL} {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;

  ${min.DESKTOP_SMALL} {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const linkStyles = css`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid;

  &:focus,
  &:hover {
    color: ${PRIMARY_ORANGE};
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

export const miniStyles = css`
  font-size: 0.875rem;
  line-height: 1.125rem;

  ${min.DESKTOP_SMALL} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;

export const A = styled.a`
  ${linkStyles}
  ${miniStyles}
`;

export const Caption = styled.p`
  ${miniStyles}
`;
