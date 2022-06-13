import styled from 'styled-components';

import { P, H1 } from '../../theme/typography';
import { Row } from '../../theme/layout';
import {
  TABLET,
  DESKTOP_SMALL,
  PRIMARY_BLUE,
  min,
} from '../../theme/constants';

export const StyledRow = styled(Row)`
  margin-top: 4em;
  margin-bottom: 4em;
  align-items: center;

  @media (min-width: ${DESKTOP_SMALL}) {
    margin-top: 9em;
    margin-bottom: 9em;
  }
`;

export const Title = styled(H1)`
  margin-top: 0.5em;

  @media (min-width: ${TABLET}) {
    margin-top: 0;
  }
`;

export const Description = styled(P)`
  margin: 1.5em 0;
`;

export const Thumbnail = styled.img`
  width: 100%;
  border: 3px solid ${PRIMARY_BLUE};
  ${min.MOBILE} {
    width: 90%;
  }
`;
