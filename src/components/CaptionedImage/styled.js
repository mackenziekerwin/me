import styled from "styled-components";

import { DESKTOP_SMALL } from "../../theme/constants";

export const StyledImage = styled.img`
  width: 100%;
`;

export const Caption = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin: 1em 0 2em 0;

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 18px;
    line-height: 24px;
  }
`;
