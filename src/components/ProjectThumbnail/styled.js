import styled from "styled-components";

import { Col6 } from "../../theme/layout";
import { H2 } from "../../theme/typography";

export const Container = styled(Col6)`
  margin: 2em 0;
`;

export const Thumbnail = styled.img`
  width: 100%;

  &:hover {
    filter: brightness(75%);
  }
`;

export const Title = styled(H2)`
  margin: 0.75em 0 0.5em 0;
`;
