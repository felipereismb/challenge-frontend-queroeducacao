import { render } from '@testing-library/react';

import { Slider } from './index';

describe('<Slider />', () => {
  it('should render', () => {
    const component = render(
      <Slider min={50} max={1000} onChange={jest.fn()} value="teste" />,
    );
    expect(component).toBeTruthy();
  });
});
