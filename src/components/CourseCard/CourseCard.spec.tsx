import { render } from '@testing-library/react';

import { CourseCard } from './index';

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

describe('<CourseCard />', () => {
  it('should render', () => {
    const component = render(<CourseCard scholarship={mock} />);
    expect(component).toBeTruthy();
  });
});
