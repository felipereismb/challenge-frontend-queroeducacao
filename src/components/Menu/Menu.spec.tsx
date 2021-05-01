import { fireEvent, render } from '@testing-library/react';

import { Menu } from './index';

describe('<Menu />', () => {
  it('should render', () => {
    const component = render(<Menu />);
    expect(component).toBeTruthy();
  });

  it('click menu bolsas-favoritas', () => {
    const { getByTestId } = render(<Menu />);

    const menuItem = getByTestId('bolsas-favoritas');
    fireEvent.click(menuItem);
  });

  it('click menu pre-matriculas', () => {
    const { getByTestId } = render(<Menu />);

    const menuItem = getByTestId('pre-matriculas');
    fireEvent.click(menuItem);
  });

  it('click menu minha-conta', () => {
    const { getByTestId } = render(<Menu />);

    const menuItem = getByTestId('minha-conta');
    fireEvent.click(menuItem);
  });
});
