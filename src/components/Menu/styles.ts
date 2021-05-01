import styled, { css } from 'styled-components';

import { colors, sizes } from 'styles';

interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 100%;
  color: white;
  background-color: ${colors.primaryBlue};

  padding: 0px ${sizes.desktopPadding};

  @media (max-width: ${sizes.mobile}) {
    padding: 0px ${sizes.mobilePadding};
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  height: 40px;

  @media (max-width: ${sizes.mobile}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  justify-content: space-between;
  width: 100%;

  transition: all 0.5s 0.5s ease-in-out;

  > div {
    position: relative;
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .wrapper {
    position: absolute;
    top: 29px;
    right: ${`-${sizes.mobilePadding}`};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

    width: 150px;
    padding: 20px 15px;

    color: white;
    background-color: ${colors.primaryBlue};

    p {
      margin-top: 15px;
      :first-child {
        margin-top: 0px;
      }
    }
  }

  @media (max-width: ${sizes.mobile}) {
    display: flex;
  }
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;

  padding: 0px 15px;
  cursor: pointer;

  :first-child {
    margin-left: -15px;
    padding-left: 15px;
  }

  height: 100%;

  &:hover {
    background-color: ${colors.backgroundOverlay};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colors.secondaryBlue};
    `}
`;
