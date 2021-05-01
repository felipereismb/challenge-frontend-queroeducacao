import styled from 'styled-components';

import { colors, sizes } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 420px;
  padding: 0px 30px;
  padding-top: 50px;

  text-align: center;
  line-height: 20px;

  background: white;

  border: 1px solid ${colors.backgroundDivider};
  border-radius: 2px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);

  > :first-child {
    position: absolute;
    bottom: 80px;
  }

  .icon {
    color: ${colors.secondaryBlue};
    transition: 0.2s;
  }

  :hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  }

  cursor: pointer;

  @media (max-width: ${sizes.mobile}) {
    width: 100%;
    height: 200px;

    > :first-child {
      bottom: 40px;
    }
  }
`;
