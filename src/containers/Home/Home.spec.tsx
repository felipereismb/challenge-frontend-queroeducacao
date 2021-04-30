import { render } from '@testing-library/react';

import { Home } from './index';

describe('<HomeContainer />', () => {
  it('should render', () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });
});
