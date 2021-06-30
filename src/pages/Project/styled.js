import styled from "styled-components";

import { Row } from "../../theme/layout";
import { H1, H2, P1 } from "../../theme/typography";

export const Hero = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const Title = styled(H1)`
  margin: 0.75em 0 0.5em 0;
`;

export const Heading = styled(H2)`
  margin: 2em 0 1em 0;
`;

export const Paragraph = styled(P1)`
  margin-bottom: 1em;
`;

export const ButtonContainer = styled.div`
  margin: 3em 0;
`;
