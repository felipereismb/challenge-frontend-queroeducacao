import styled, { css } from 'styled-components';

import { colors } from 'styles/theme';

interface ContainerOptionsProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  > span {
    font-size: 11px;
    color: ${colors.blackText};
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 44px;
  width: 100%;

  background: #fff;

  border: 1px solid ${colors.backgroundDivider};
  border-radius: 4px;

  cursor: pointer;
`;

export const FilterDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 4px 16px;

  div {
    display: flex;
    flex-direction: column;

    span.placeholder,
    span.selected_value {
      font-size: 14px;
      width: max-content;
    }

    span.selected_value {
      color: ${colors.blackText};
    }

    span.placeholder {
      color: ${colors.blackText};
    }
  }

  img {
    margin-left: 10px;
  }
`;

export const Select = styled.div<ContainerOptionsProps>`
  position: absolute;
  left: 0;
  top: 43px;
  z-index: 9;
  display: none;

  max-height: 120px;
  height: auto;
  min-width: 100%;
  background: #fff;

  box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid ${colors.primaryBlue};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #8d99ae;
  }

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`;

export const ListOptions = styled.div`
  background: #fff;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;

  padding: 0 18px;

  font-size: 14px;
  text-align: left;
  color: ${colors.blackText};
  border: none;
  background: transparent;

  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${colors.backgroundDivider};
    color: ${colors.blackText};
  }
`;
