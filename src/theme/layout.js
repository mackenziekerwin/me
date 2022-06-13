import styled from 'styled-components';
import { min } from './constants';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  ${min.TABLET} {
    padding: 1rem 1.5rem;
  }
  ${min.DESKTOP_SMALL} {
    padding: 1rem 3rem;
    max-width: 1320px;
    margin: auto;
  }
`;

export const TallContainer = styled(Container)`
  height: calc(100vh - 12rem);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

export const Col = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Col1 = styled(Col)`
  ${min.MOBILE} {
    width: ${(1 / 12) * 100}%;
  }
`;

export const Col2 = styled(Col)`
  ${min.MOBILE} {
    width: ${(1 / 6) * 100}%;
  }
`;

export const Col3 = styled(Col)`
  ${min.MOBILE} {
    width: 25%;
  }
`;

export const Col5 = styled(Col)`
  ${min.MOBILE} {
    width: ${(5 / 12) * 100}%;
  }
`;

export const Col6 = styled(Col)`
  ${min.MOBILE} {
    width: 50%;
  }
`;

export const Col8 = styled(Col)`
  ${min.MOBILE} {
    width: ${(2 / 3) * 100}%;
  }
`;

export const Col9 = styled(Col)`
  ${min.MOBILE} {
    width: 75%;
  }
`;
