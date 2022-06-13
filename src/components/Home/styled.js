import styled from 'styled-components';

import { PRIMARY_ORANGE, DESKTOP_SMALL } from '../../theme/constants';

export const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Arrow = styled.a`
  font-size: 48px;
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover {
    text-decoration: none;
  }

  &:hover {
    color: ${PRIMARY_ORANGE};
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 4em 0;

  @media (min-width: ${DESKTOP_SMALL}) {
    margin: 9em 0;
  }
`;
