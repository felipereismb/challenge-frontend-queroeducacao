import { render } from '@testing-library/react';

import { Button } from './index';

describe('<Button />', () => {
  it('should render', () => {
    const component = render(<Button />);
    expect(component).toBeTruthy();
  });
});
