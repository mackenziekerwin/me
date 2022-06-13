import styled from 'styled-components';
import { Row } from '../../theme/layout';
import { min } from '../../theme/constants';

export const Hero = styled(Row)`
  justify-content: center;
`;

export const Body = styled.div`
  img {
    width: 100%;
  }
`;

export const ToolsList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  font-size: 16px;
  line-height: 20px;

  ${min.DESKTOP_SMALL} {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Contents = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-top: 0.83rem;
  ${min.DESKTOP_SMALL} {
    margin-top: 1.245rem;
  }
`;
