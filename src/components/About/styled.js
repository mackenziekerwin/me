import styled from 'styled-components';
import { min } from '../../theme/constants';

export const Body = styled.div`
  ${min.TABLET} {
    width: 60%;
  }
  ${min.DESKTOP_SMALL} {
    width: 66%;
  }
  ${min.DESKTOP_LARGE} {
    width: 60%;
  }
`;
