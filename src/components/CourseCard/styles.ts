import styled from 'styled-components';

import { colors } from 'styles';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 270px;
  height: 420px;

  padding: 20px 0px;
  background: white;

  border: 1px solid ${colors.backgroundDivider};
  border-radius: 2px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);

  img {
    height: 50px;
    padding: 5px 0px;
  }

  p {
    font-weight: bold;

    > span {
      font-size: 13px;
      font-weight: normal;
      color: ${colors.blackText};
    }
  }

  .full-price {
    margin-top: 20px;

    font-size: 13px;
    font-weight: normal;
    text-decoration: line-through;
  }

  .class-details {
    display: flex;
    align-items: center;
    flex-direction: column;

    column-gap: 20px;

    .start-date {
      font-weight: normal;
    }
  }

  .buttons {
    position: absolute;
    display: flex;

    column-gap: 20px;
    margin-top: 20px;

    bottom: 20px;
  }
`;

export const Divider = styled.div`
  width: 85%;
  height: 2px;

  margin: 15px 0px;

  background-color: ${colors.backgroundDivider};
`;
