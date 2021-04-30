import styled, { css } from 'styled-components';

import { colors, sizes } from '../../styles';

interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* column-gap: 30px; */

  height: 40px;
  width: 100%;
  color: white;
  background-color: ${colors.primaryBlue};

  padding: 0px ${sizes.desktopPadding};

  @media (max-width: ${sizes.mobile}) {
    padding: 0px ${sizes.mobilePadding};
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
