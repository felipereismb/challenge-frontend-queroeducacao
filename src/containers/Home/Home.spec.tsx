import { fireEvent, render } from '@testing-library/react';

import { Home } from './index';

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

const mock2 = {
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

describe('<HomeContainer />', () => {
  it('render with localStorage', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify([mock, mock2]));

    const component = render(<Home />);

    expect(component).toBeTruthy();
  });

  it('click menu button-all', () => {
    const { getByTestId } = render(<Home />);

    const buttonElement = getByTestId('button-all');
    fireEvent.click(buttonElement);
  });

  it('click menu button-2019.2', () => {
    const { getByTestId } = render(<Home />);

    const buttonElement = getByTestId('button-2019.2');
    fireEvent.click(buttonElement);
  });

  it('click menu button-2020.1', () => {
    const { getByTestId } = render(<Home />);

    const buttonElement = getByTestId('button-2020.1');
    fireEvent.click(buttonElement);
  });

  it('click card to add ', () => {
    const { getByText } = render(<Home />);

    const cardElement = getByText(
      'Clique para adicionar bolsas de curso do seu interesse',
    );
    fireEvent.click(cardElement);
  });

  it('Open Modal and close modal', () => {
    const { getByTestId, getByText } = render(<Home />);

    const cardElement = getByTestId('CardAddCourse');
    fireEvent.click(cardElement);

    const buttonCloseModalElement = getByText('X');
    fireEvent.click(buttonCloseModalElement);
  });

  it('render with localStorage and click menu button-2020.1', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify([mock, mock2]));

    const { getByTestId } = render(<Home />);

    const buttonElement = getByTestId('button-2020.1');
    fireEvent.click(buttonElement);
  });

  it('click delete item ', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify([mock, mock2]));

    const { getAllByText } = render(<Home />);

    const buttonElement = getAllByText('Excluir');
    fireEvent.click(buttonElement[0]);
  });
});
