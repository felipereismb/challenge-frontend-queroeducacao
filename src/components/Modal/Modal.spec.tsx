import { fireEvent, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import { Modal } from './index';

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

describe('<Modal />', () => {
  it('should render', () => {
    const component = render(<Modal handleClose={jest.fn} visibility />);
    expect(component).toBeTruthy();
  });

  it('close modal', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const elementButton = getByTestId('button-close-modal');
    fireEvent.click(elementButton);
  });

  it('change selected courses', () => {
    const { getAllByTestId } = render(
      <Modal handleClose={jest.fn} visibility />,
    );

    const checkboxElement = getAllByTestId(
      `checkbox-courseitem-https://www.tryimg.com/u/2019/04/16/etep.png`,
    );
    const firstCheck = checkboxElement[0] as HTMLInputElement;
    fireEvent.click(firstCheck);
    expect(firstCheck.checked).toEqual(true);

    fireEvent.click(firstCheck);
    expect(firstCheck.checked).toEqual(false);
  });

  it('Add scholarships without localStorage', () => {
    const { getAllByTestId, getByTestId } = render(
      <Modal handleClose={jest.fn} visibility />,
    );
    const checkboxElement = getAllByTestId(
      `checkbox-courseitem-https://www.tryimg.com/u/2019/04/16/etep.png`,
    );
    const firstCheck = checkboxElement[0] as HTMLInputElement;
    fireEvent.click(firstCheck);

    const buttonElement = getByTestId('button-add-scholarships');
    fireEvent.click(buttonElement);
  });

  it('Add scholarships with localStorage', () => {
    /* Resgate do localstorage */
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify([mock]));

    const { getByTestId, getAllByTestId } = render(
      <Modal handleClose={jest.fn} visibility />,
    );

    const checkboxElement = getAllByTestId(
      `checkbox-courseitem-https://www.tryimg.com/u/2019/04/16/etep.png`,
    );
    const firstCheck = checkboxElement[0] as HTMLInputElement;
    fireEvent.click(firstCheck);
    // fireEvent.click(firstCheck);

    const buttonElement = getByTestId('button-add-scholarships');
    fireEvent.click(buttonElement);
  });

  it('Click checkbox checkedPresential', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const checkboxElement = getByTestId('checkedPresential');
    fireEvent.click(checkboxElement);
  });

  it('Click checkbox checkedDistance', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const checkboxElement = getByTestId('checkedDistance');
    fireEvent.click(checkboxElement);
  });

  it('Change value sider', async () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const sliderElement = getByTestId('slider');
    fireEvent.change(sliderElement, {
      target: {
        value: '1000',
      },
    });
  });

  it('select course', () => {
    const { getAllByText } = render(<Modal handleClose={jest.fn} visibility />);

    const itemElement = getAllByText('Biomedicina');
    fireEvent.click(itemElement[0]);
  });

  it('select citie', () => {
    const { getAllByText } = render(<Modal handleClose={jest.fn} visibility />);

    const itemElement = getAllByText('Jacareí');
    fireEvent.click(itemElement[0]);
  });

  it('Open wrapperSort', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const itemElement = getByTestId('wrapperSort');
    fireEvent.click(itemElement);
  });

  it('Open wrapperSort and click start-date option', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const itemElement = getByTestId('wrapperSort');
    fireEvent.click(itemElement);
    const startDateElement = getByTestId('optionSortStartDate');
    fireEvent.click(startDateElement);
  });

  it('Open wrapperSort and click name option', () => {
    const { getByTestId } = render(<Modal handleClose={jest.fn} visibility />);

    const itemElement = getByTestId('wrapperSort');
    fireEvent.click(itemElement);

    const startDateElement = getByTestId('optionSortName');
    fireEvent.click(startDateElement);
  });
});
