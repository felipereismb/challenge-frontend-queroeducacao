import { useState } from 'react';
import { Container, Item } from './styles';

export const Menu: React.FC = () => {
  const [selected, setSelected] = useState('bolsas-favoritas');

  return (
    <Container>
      <Item
        data-testid="minha-conta"
        selected={selected === 'minha-conta'}
        onClick={() => setSelected('minha-conta')}
      >
        Minha Conta
      </Item>
      <Item
        data-testid="pre-matriculas"
        selected={selected === 'pre-matriculas'}
        onClick={() => setSelected('pre-matriculas')}
      >
        Pré-matrículas
      </Item>
      <Item
        data-testid="bolsas-favoritas"
        selected={selected === 'bolsas-favoritas'}
        onClick={() => setSelected('bolsas-favoritas')}
      >
        Bolsas favoritas
      </Item>
    </Container>
  );
};
