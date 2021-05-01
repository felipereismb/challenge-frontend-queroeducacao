import styled, { css } from 'styled-components';

import { colors } from '../../styles';

interface ButtonProps {
  variant?: 'prymary' | 'secondary';
  size?: 'SM' | 'L' | 'XL';
}

const variations = {
  prymary: css`
    background: white;
    color: ${colors.primaryBlue};
    border: 1px solid ${colors.primaryBlue};

    :hover {
      background: ${colors.backgroundDivider};
    }
  `,

  secondary: css`
    background: ${colors.primaryYellow};
    color: ${colors.blackText};
    border: 1px solid ${colors.secondaryYellow};

    :hover {
      background: ${colors.secondaryYellow};
    }
  `,
};

const sizes = {
  SM: css`
    padding: 5px 15px;
  `,

  L: css`
    padding: 10px 15px;
  `,

  XL: css`
    padding: 10px 15px;
  `,
};

export const Container = styled.button<ButtonProps>`
  border-radius: 2px;

  font-weight: bold;

  ${props => variations[props.variant || 'prymary']}
  ${props => sizes[props.size || 'L']}

  :disabled {
    background: #cacdce;
    color: ${colors.backgroundOverlay};
    border: 1px solid ${colors.backgroundOverlay};
  }
`;
