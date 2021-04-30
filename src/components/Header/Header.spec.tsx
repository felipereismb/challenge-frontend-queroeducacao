import { render } from '@testing-library/react';

import { Header } from './index';

describe('<Header />', () => {
  it('should render', () => {
    const component = render(<Header />);
    expect(component).toBeTruthy();
  });
});
