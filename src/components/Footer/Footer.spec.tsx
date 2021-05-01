import { render } from '@testing-library/react';

import { Footer } from './index';

describe('<Footer />', () => {
  it('should render', () => {
    const component = render(<Footer />);
    expect(component).toBeTruthy();
  });
});
