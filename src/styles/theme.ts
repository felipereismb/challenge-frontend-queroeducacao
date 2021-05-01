import { lighten } from 'polished';
import styled from 'styled-components';

export const sizes = {
  headerHeight: '110px',
  desktopPadding: '80px',
  mobilePadding: '10px',
  mobile: '600px',
  ipad: '900px',
  notebook: '1200px',
  desktop: '1800px',
};

export const colors = {
  primaryBlue: '#18ACC4',
  secondaryBlue: '#007A8D',
  primaryYellow: '#FDCB13',
  secondaryYellow: '#DE9E1F',
  green: '#0FA866',
  blackText: '#1F2D30',
  backgroundDivider: '#EEEFEF',
  backgroundColor: '#FBFBFB',
  backgroundOverlay: lighten(0.12, '#1F2D30'),
};

export const Wrapper = styled.div`
  background-color: ${colors.backgroundColor};
  color: ${colors.blackText};

  font-size: 1.6rem;

  .primaryBlue {
    color: ${colors.primaryBlue};
  }

  .green {
    color: ${colors.green};
  }
`;
