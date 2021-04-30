import { fireEvent, render, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import { Dropdown } from './index';

const { act } = TestRenderer;

const onChangeOption = jest.fn();

describe('Dropdown element renders', () => {
  test('Dropdown open, click inside, mousedown outside', async () => {
    const { getByText, getByTestId } = render(
      <div>
        <div data-testid="teste-id" />
        <Dropdown
          titleDropdown="theTitle"
          selectedValue="theValue"
          placeholder="thePlaceholder"
          itens={[
            { key: '1', label: 'iten1', value: '1' },
            { key: '2', label: 'iten2', value: '2' },
            { key: '3', label: 'iten3', value: '3' },
          ]}
          onChangeOption={onChangeOption}
        />
        ,
      </div>,
    );

    // clicou para abrir
    const openButton = getByTestId('Filter-Methods');
    await waitFor(() => {
      act(() => {
        fireEvent.click(openButton);
      });
    });

    // clicou dentro, não fecha
    const elementTitle = getByText('theTitle');
    expect(elementTitle).toBeInTheDocument();
    await waitFor(() => {
      act(() => {
        fireEvent.mouseDown(elementTitle);
      });
    });

    // clicou para fechar
    const clickOutside = getByTestId('teste-id');
    await waitFor(() => {
      act(() => {
        fireEvent.mouseDown(clickOutside);
      });
    });
  });

  test('Dropdown without placeholder, click on item', async () => {
    const { getByTestId, getByText } = render(
      <div>
        <div data-testid="teste-id" />
        <Dropdown
          titleDropdown="theTitle"
          placeholder="thePlaceholder"
          itens={[
            { key: '1', label: 'iten1', value: '1' },
            { key: '2', label: 'iten2', value: '2' },
            { key: '3', label: 'iten3', value: '3' },
          ]}
          onChangeOption={onChangeOption}
        />
        ,
      </div>,
    );

    // clicou para abrir
    const openButton = getByTestId('Filter-Methods');
    await waitFor(() => {
      act(() => {
        fireEvent.click(openButton);
      });
    });

    // clicou em um item da lista
    const onChangeOptionButton = getByText('iten1');
    await waitFor(() => {
      act(() => {
        fireEvent.click(onChangeOptionButton);
      });
    });
  });
});
