import styled from 'styled-components';
import { PRIMARY_ORANGE } from '../../theme/constants';

export const StyledSVG = styled.svg`
  transition: transform 250ms;
  &:hover {
    transform: scale(1.125);
    path {
      fill: ${PRIMARY_ORANGE};
    }
  }
`;
