import styled from 'styled-components';

import { colors } from 'styles';

interface SliderProps {
  backgroundValue?: number;
}

export const Container = styled.input<SliderProps>`
  border: 1px solid ${colors.backgroundDivider};
  border-radius: 5px;
  width: 100%;
  margin: 24px 0 16px;

  background: ${({ backgroundValue }) =>
    backgroundValue
      ? ` linear-gradient(
      to right,
      ${colors.primaryBlue} 0%,
      ${colors.primaryBlue} ${backgroundValue}%,
      #fff ${backgroundValue}%,
      #fff 100%
    )`
      : `
    linear-gradient(
      to right,
      ${colors.primaryBlue} 0%,
      ${colors.primaryBlue} 0%,
      #fff 0%,
      #fff 100%
    )
  `};

  // Chrome
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    & {
      height: 6px;
      -webkit-appearance: none;
      background-color: #ddd;
    }
    &::-webkit-slider-runnable-track {
      height: 30px;
      -webkit-appearance: none;
      color: #444;
      transition: box-shadow 0.2s ease-in-out;
    }
    &::-webkit-slider-thumb {
      width: 30px;
      -webkit-appearance: none;
      height: 30px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid ${colors.primaryBlue};
    }
  }
`;

// export const Container = styled.input<SliderProps>`
//   background: ${({ backgroundValue }) =>
//     backgroundValue
//       ? ` linear-gradient(
//         to right,
//         #82cfd0 0%,
//         #82cfd0 ${backgroundValue}%,
//         #fff ${backgroundValue}%,
//         #fff 100%
//       )`
//       : `
//       linear-gradient(
//         to right,
//         #82cfd0 0%,
//         #82cfd0 50%,
//         #fff 50%,
//         #fff 100%
//       )
//     `};
//   border: solid 1px #82cfd0;
//   border-radius: 8px;
//   height: 7px;
//   width: 100%;
//   outline: none;
//   transition: background 450ms ease-in;
//   -webkit-appearance: none;
// `;
