import { render } from '@testing-library/react';

import { Modal } from './index';

describe('<Modal />', () => {
  it('should render', () => {
    const component = render(<Modal handleClose={jest.fn} visibility />);
    expect(component).toBeTruthy();
  });
});
