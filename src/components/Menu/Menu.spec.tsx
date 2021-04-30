import { render } from '@testing-library/react';

import { Menu } from './index';

describe('<Menu />', () => {
  it('should render', () => {
    const component = render(<Menu />);
    expect(component).toBeTruthy();
  });
});
