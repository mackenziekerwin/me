import { Link } from 'gatsby';
import styled from 'styled-components';
import { PRIMARY_BLUE } from '../../theme/constants';

import { Col6 } from '../../theme/layout';
import { H2 } from '../../theme/typography';

export const Container = styled(Col6)`
  margin: 2em 0;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.025);
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Thumbnail = styled.img`
  width: 100%;
  box-sizing: border-box;
  border: 3px solid ${PRIMARY_BLUE};
`;

export const Title = styled(H2)`
  margin: 0.75em 0 0.5em 0;
`;
