import styled from 'styled-components';

import { colors, sizes } from 'styles';

export const Container = styled.div`
  background-color: ${colors.primaryBlue};
  color: white;

  .contacts {
    display: flex;
    column-gap: 0px;
    width: 100%;

    .item {
      display: flex;
      justify-content: center;

      padding: 40px 0px;
      width: 33.3%;

      background-color: ${colors.secondaryBlue};

      div {
        margin-left: 15px;
        p {
          font-weight: bold;
        }

        span {
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }

    .whatsapp {
      display: flex;
      justify-content: center;

      padding: 40px 0px;
      width: 33.3%;

      background-color: ${colors.secondaryBlue};

      div {
        margin-left: 15px;
        p {
          font-weight: bold;
        }

        span {
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }
  }

  .all-others {
    display: flex;
    width: 100%;
  }

  .made-by-quero {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;

    font-size: 11px;

    padding: 40px 0px;
  }

  .mobile {
    display: none;
  }

  @media (max-width: ${sizes.ipad}) {
    .contacts {
      flex-direction: column;

      .all-others {
        column-gap: 5px;
      }

      .whatsapp {
        width: 100%;
        margin-bottom: 5px;
        padding: 20px 0px;
      }

      .item {
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 20px 0px;

        div {
          margin-left: 0px;
        }
      }
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
      margin-top: 5px;
    }
  }
`;
