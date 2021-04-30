import { render } from '@testing-library/react';

import { HomePage } from './index';

describe('<HomePage/>', () => {
  test('should render', () => {
    const component = render(<HomePage />);
    expect(component).toBeTruthy();
  });
});
