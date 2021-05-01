import { fireEvent, render } from '@testing-library/react';

import { CourseItem } from './index';

const mock = {
  full_price: 932.58,
  price_with_discount: 606.18,
  discount_percentage: 35.0,
  start_date: '01/08/2019',
  enrollment_semester: '2019.2',
  enabled: true,
  course: {
    name: 'Educação Física',
    kind: 'Presencial',
    level: 'Bacharelado',
    shift: 'Noite',
  },
  university: {
    name: 'ETEP',
    score: 3.2,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/etep.png',
  },
  campus: {
    name: 'Jardim Esplanada',
    city: 'São José dos Campos',
  },
};

const mockOnChange = jest.fn();

describe('<CourseItem />', () => {
  it('should render', () => {
    const component = render(
      <CourseItem scholarship={mock} onChange={mockOnChange} checked />,
    );
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const { getByTestId } = render(
      <CourseItem scholarship={mock} onChange={mockOnChange} checked />,
    );

    const checkboxElement = getByTestId(
      `checkbox-courseitem-${mock.university.logo_url}`,
    );

    fireEvent.click(checkboxElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
