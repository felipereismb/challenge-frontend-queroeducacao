import styled from 'styled-components';

import { colors } from '../../styles';

interface ModalProps {
  visibility: boolean;
}

export const Container = styled.div<ModalProps>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(0, 0, 0, 0.85);

  z-index: 1;

  visibility: ${({ visibility }) => (visibility ? 'visible' : 'hidden')};
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  padding: 80px 0px;

  > button {
    width: 50px;
    margin-bottom: 10px;

    color: white;
    text-align: right;
    font-size: 25px;

    border: none;
    background-color: transparent;
  }
`;

export const Card = styled.div`
  min-height: 500px;
  width: 750px;

  background-color: white;
  padding: 20px 40px;

  span {
    font-size: 11px;
    color: ${colors.blackText};
    font-weight: bold;
  }

  .dropdowns {
    display: flex;
    column-gap: 20px;

    margin-top: 40px;
  }

  .wrapper {
    display: flex;
    column-gap: 20px;

    margin-top: 20px;

    .modality {
      width: 100%;

      div {
        display: flex;
        column-gap: 30px;
        margin-top: 15px;

        .checkbox {
          display: flex;
          align-items: center;
          column-gap: 8px;
        }
      }
    }

    .howMuch {
      width: 100%;

      p {
        font-size: 13px;
      }
    }
  }

  .result {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
  }
`;

export const Courses = styled.div``;
