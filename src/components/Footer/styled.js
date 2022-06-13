import styled from 'styled-components';
import { min } from '../../theme/constants';
import { Row, Col } from '../../theme/layout';
import { A } from '../../theme/typography';

export const FooterRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export const NoteContainer = styled(Col)`
  ${min.TABLET} {
    width: 65%;
  }
  ${min.DESKTOP_LARGE} {
    width: 75%;
  }
`;

export const Links = styled(Col)`
  display: flex;
  justify-content: start;
  ${min.TABLET} {
    justify-content: space-between;
    width: 35%;
  }
  ${min.DESKTOP_LARGE} {
    width: 25%;
  }
`;

export const Link = styled(A)`
  margin-right: 1rem;
`;
