import styled from 'styled-components';
import { Link } from 'gatsby';

import { PRIMARY_ORANGE, DESKTOP_SMALL } from '../../theme/constants';

const styles = `
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  border-radius: 500px;
  border: 1px solid;
  padding: 0.25em 0.5em;

  &:focus,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: ${PRIMARY_ORANGE};
    text-decoration: none;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 24px;
    border: 2px solid;
  }
`;

export const RoundedLink = styled(Link)`
  ${styles}
`;

export const RoundedAnchor = styled.a`
  ${styles}
`;
