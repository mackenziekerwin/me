import styled from "styled-components";

import {
  PRIMARY_BLUE,
  PRIMARY_GREEN,
  TABLET,
  DESKTOP_SMALL,
} from "../../theme/constants";
import { Row, Col3, Col9 } from "../../theme/layout";

export const StyledFooter = styled.footer`
  background-color: ${PRIMARY_BLUE};
  color: ${PRIMARY_GREEN};
  width: 100%;
  padding: 32px 0px;
`;

export const FooterContent = styled(Row)`
  padding-top: 2em;
`;

export const Link = styled.a`
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid transparent;

  &:visited,
  &:focus,
  &:hover {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    border-bottom: 1px solid;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Links = styled(Col3)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (min-width: ${TABLET}) {
    flex-direction: row;
  }
`;

export const FooterText = styled(Col9)`
  font-size: 14px;
  line-height: 18px;

  @media (min-width: ${TABLET}) {
    font-size: 18px;
    line-height: 24px;
    text-align: end;
  }
`;
