import styled from "styled-components";

import { PRIMARY_ORANGE, DESKTOP_SMALL } from "./constants";

export const H1 = styled.div`
  font-size: 32px;
  line-height: 40px;

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const H2 = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const P1 = styled.div`
  font-size: 16px;
  line-height: 20px;

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const A = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid;

  &:focus,
  &:hover {
    color: ${PRIMARY_ORANGE};
    text-decoration: none;
    border-bottom: 1px solid;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 18px;
    line-height: 24px;
  }
`;
