import { fireEvent, render } from '@testing-library/react';

import { AddCourseCard } from './index';

describe('<AddCourseCard />', () => {
  it('should render', () => {
    const component = render(<AddCourseCard onClick={jest.fn()} />);
    expect(component).toBeTruthy();
  });

  test('Error rendering with property CARD TRUE', () => {
    const { getByText } = render(<AddCourseCard onClick={jest.fn()} />);

    const appliedFeeElement = getByText('Adicionar curso');

    // Mouse Hover
    fireEvent.mouseEnter(appliedFeeElement);
    // Mouse Out
    fireEvent.mouseLeave(appliedFeeElement);
  });
});
