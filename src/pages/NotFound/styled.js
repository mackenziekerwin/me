import styled from "styled-components";

import { Container } from "../../theme/layout";
import { P1 } from "../../theme/typography";

export const CenteredContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled(P1)`
  margin: 1em 0;
`;
