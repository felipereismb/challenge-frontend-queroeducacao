import styled, { css } from 'styled-components';

import { colors } from '../../styles';

interface ModalProps {
  visibility: boolean;
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s 0.5s ease-in-out;
  background-color: rgb(31, 45, 48, 0.88);

  ${({ visibility }) =>
    visibility
      ? css`
          opacity: 1;
          visibility: visible;
          -webkit-transition-delay: 0s;
          -ms-transition-delay: 0s;
          transition-delay: 0s;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.5s 0.5s ease-in-out;
        `};

  display: flex;
  flex-direction: column;
  align-items: center;

  > .modal-close {
    position: relative;
    max-width: 700px;
    min-width: 360px;
    max-height: 85%;

    width: 100%;

    margin-top: 10px;

    > button {
      position: absolute;
      width: 50px;
      right: 0px;

      color: white;
      text-align: right;
      font-size: 25px;

      border: none;
      background-color: transparent;
    }
  }
`;

export const ModalContent = styled.div<ModalProps>`
  position: absolute;
  top: 40px;
  left: 50%;
  max-width: 700px;
  min-width: 360px;
  max-height: 85%;

  width: 100%;

  overflow: auto;
  padding: 10px;
  z-index: 2;
  border-radius: 1px;
  background: #fff;
  transition: all 0.5s ease-in-out;

  ${({ visibility }) =>
    visibility
      ? css`
          opacity: 1;
          -webkit-transform: translate(-50%, 0);
          -ms-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
          -webkit-transition-delay: 0.5s;
          -ms-transition-delay: 0.5s;
          transition-delay: 0.5s;
        `
      : css`
          opacity: 0;
          -webkit-transform: translate(-50%, 0);
          -ms-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
          -webkit-transition: all 0.5s ease-in-out;
        `};
`;

export const Card = styled.div`
  padding: 20px 30px;

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
    margin-bottom: 40px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
  }
`;

export const Courses = styled.div``;
