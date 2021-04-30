import { useState } from 'react';
import { Container, Item } from './styles';

export const Menu: React.FC = () => {
  const [selected, setSelected] = useState('bolsas-favoritas');

  return (
    <Container>
      <Item
        selected={selected === 'minha-conta'}
        onClick={() => setSelected('minha-conta')}
      >
        Minha Conta
      </Item>
      <Item
        selected={selected === 'pre-matriculas'}
        onClick={() => setSelected('pre-matriculas')}
      >
        Pré-matrículas
      </Item>
      <Item
        selected={selected === 'bolsas-favoritas'}
        onClick={() => setSelected('bolsas-favoritas')}
      >
        Bolsas favoritas
      </Item>
    </Container>
  );
};
