import { Link } from 'gatsby';
import styled from 'styled-components';

import { PRIMARY_ORANGE, DESKTOP_SMALL } from '../../theme/constants';
import { Row } from '../../theme/layout';

export const StyledHeader = styled.nav`
  padding: 0.5em 0;
  /* position: sticky; */
  top: 0;
`;

export const NavBar = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Tab = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: inherit;

  &:focus {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: ${PRIMARY_ORANGE};
    text-decoration: none;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 24px;
  }
`;
