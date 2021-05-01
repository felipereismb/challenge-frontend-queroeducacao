import styled from 'styled-components';

import { sizes, colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: ${sizes.headerHeight} ${sizes.desktopPadding};
  color: ${colors.blackText};

  h1 {
    margin-top: 45px;
  }
  p {
    margin-top: 10px;
  }

  @media (max-width: ${sizes.mobile}) {
    padding: ${sizes.headerHeight} ${sizes.mobilePadding};
  }
`;

export const Path = styled.div`
  display: flex;
  padding-top: 25px;

  color: ${colors.primaryBlue};
  font-weight: bold;

  span {
    font-size: 12px;

    + .selected {
      color: ${colors.blackText};
    }
  }

  .desktop {
    display: flex;
    column-gap: 10px;

    @media (max-width: ${sizes.mobile}) {
      display: none;
    }
  }

  .mobile {
    display: none;

    @media (max-width: ${sizes.mobile}) {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
  }
`;

export const Semesters = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;

  margin: 40px 0px;

  button {
    padding: 5px 20px;

    font-weight: bold;
    color: ${colors.secondaryBlue};
    background-color: white;

    border-width: 0.1px;
    border-style: solid;
    border-color: ${colors.secondaryBlue};

    :first-child {
      border-width: 0.1px;
      border-style: solid;
      border-color: ${colors.secondaryBlue};

      border-right-width: 0px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    :last-child {
      border-width: 0.1px;
      border-style: solid;
      border-color: ${colors.secondaryBlue};

      border-left-width: 0px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    :hover {
      background-color: ${colors.backgroundDivider};
    }

    &.selected {
      color: white;
      background-color: ${colors.secondaryBlue};
    }

    &.selected:hover {
      background-color: ${colors.secondaryBlue};
    }
  }

  @media (max-width: ${sizes.mobile}) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    button {
      padding: 15px 20px;

      :first-child {
        border-width: 0.1px;
        border-style: solid;
        border-color: ${colors.secondaryBlue};

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      :last-child {
        border-width: 0.1px;
        border-style: solid;
        border-color: ${colors.secondaryBlue};

        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  column-gap: 30px;
  row-gap: 40px;

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
    column-gap: 0px;
  }
`;
