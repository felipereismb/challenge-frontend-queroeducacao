import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 270px;
  height: 420px;

  background: white;

  border: 1px solid ${colors.backgroundDivider};
  border-radius: 2px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
`;
