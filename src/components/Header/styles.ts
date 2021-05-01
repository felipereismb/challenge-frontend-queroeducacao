import styled from 'styled-components';

import { sizes, colors } from '../../styles';

export const Container = styled.header`
  position: fixed;
  height: ${sizes.headerHeight};
  width: 100%;

  background-color: white;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 100%;
  padding: 0px ${sizes.desktopPadding};

  font-weight: bold;
  color: ${colors.primaryBlue};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  img {
    height: 70%;
  }

  @media (max-width: ${sizes.mobile}) {
    padding: 0px ${sizes.mobilePadding};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  column-gap: 10px;

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 550px;
  column-gap: 10px;

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
  }
`;