import styled from 'styled-components';

import { colors, sizes } from 'styles';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 3px;

  > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    column-gap: 30px;
  }

  .university {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    .secondaryBlue {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  .scholarship {
    display: flex;
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
    /* height: 30px; */
    width: 80px;
  }

  @media (max-width: ${sizes.mobile}) {
    column-gap: 40px;

    .university {
      flex-direction: column;
      align-items: baseline;
      row-gap: 20px;
    }

    .scholarship {
      text-align: left;
    }
  }
`;
