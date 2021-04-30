import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px 3px;

  > div {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  > .scholarship {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    row-gap: 5px;

    text-align: end;
    font-size: 15px;
    span {
      font-size: 15px;
      color: ${colors.green};
    }

    .currency {
      font-size: 15px;
      font-weight: bold;
      color: ${colors.green};
    }
  }

  img {
    width: 100px;
  }
`;
