import { useState } from 'react';

// Components
import * as Components from '../../components';

// Styles
import { Container, Path, Semesters, CardsContainer } from './styles';

export const Home: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Components.Header>Header</Components.Header>

      <Container>
        <Path>
          <span>Home</span>
          <span>/</span>
          <span>Minha conta</span>
          <span className="selected">/</span>
          <span className="selected">Bolsas favoritas</span>
        </Path>

        <h1>Bolsas Favoritas</h1>
        <p>
          Adicione bolsas e faculdades do seu interesse e receba atualizações
          com as melhores ofertas disponíveis.
        </p>

        <Semesters>
          <button
            className={`${selectedSemester === 'all' && 'selected'}`}
            onClick={() => setSelectedSemester('all')}
            type="button"
          >
            Todos os semestres
          </button>
          <button
            className={`${selectedSemester === '2019.2' && 'selected'}`}
            onClick={() => setSelectedSemester('2019.2')}
            type="button"
          >
            2º semestre de 2019
          </button>
          <button
            className={`${selectedSemester === '2020.1' && 'selected'}`}
            onClick={() => setSelectedSemester('2020.1')}
            type="button"
          >
            1º semestre de 2020
          </button>
        </Semesters>

        <CardsContainer>
          <Components.AddCourseCard onClick={() => setOpenModal(!openModal)} />
        </CardsContainer>
      </Container>

      <Components.Modal
        visibility={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
};
