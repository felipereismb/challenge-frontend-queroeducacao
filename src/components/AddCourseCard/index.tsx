import { Container } from './styles';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Props {
  onClick: () => void;
}

export const AddCourseCard: React.FC<Props> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="icon"
        icon={faPlusCircle}
        size={hover ? '5x' : '4x'}
      />

      <h3>Adicionar curso</h3>
      <p>Clique para adicionar bolsas de curso do seu interesse</p>
    </Container>
  );
};
