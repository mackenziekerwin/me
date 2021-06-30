import styled from "styled-components";

import { P1 } from "../../theme/typography";
import { Container } from "../../theme/layout";

export const TallContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Bio = styled(P1)`
  margin-top: 2em;
`;
