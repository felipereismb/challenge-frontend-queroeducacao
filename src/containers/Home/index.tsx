import { useEffect, useState } from 'react';

// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import * as Components from 'components';

// Model
import IScholarship from 'models/IScholarship';

// Styles
import { Container, Path, Semesters, CardsContainer } from './styles';

export const Home: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [scholarships, setScholarships] = useState<IScholarship[]>([]);
  const [triggerRemove, setTriggerRemove] = useState(false);

  useEffect(() => {
    const itens = localStorage.getItem('selectedScholarship');
    if (itens) {
      const aux = JSON.parse(itens);
      if (selectedSemester !== 'all') {
        const filtered = aux.filter(
          (item: IScholarship) => item.enrollment_semester === selectedSemester,
        );
        setScholarships(filtered);
      } else {
        setScholarships(aux);
      }
    }
  }, [openModal, triggerRemove, selectedSemester]);

  const removeScholarship = (scholarship: IScholarship) => {
    const itens = localStorage.getItem('selectedScholarship');
    if (itens) {
      const aux = JSON.parse(itens);
      for (let index = 0; index < aux.length; index++) {
        const element = aux[index];
        if (JSON.stringify(element) === JSON.stringify(scholarship)) {
          aux.splice(index, 1);
          localStorage.setItem('selectedScholarship', JSON.stringify(aux));
          setTriggerRemove(!triggerRemove);
          break;
        }
      }
    }
  };

  return (
    <>
      <Components.Header>Header</Components.Header>

      <Container>
        <Path>
          <div className="mobile">
            <FontAwesomeIcon
              icon={faChevronDown}
              transform={{ rotate: 90 }}
              size="xs"
            />
            <span>Bolsas favoritas</span>
          </div>

          <div className="desktop">
            <span>Home</span>
            <span>/</span>
            <span>Minha conta</span>
            <span className="selected">/</span>
            <span className="selected">Bolsas favoritas</span>
          </div>
        </Path>

        <h1>Bolsas Favoritas</h1>
        <p>
          Adicione bolsas e faculdades do seu interesse e receba atualizações
          com as melhores ofertas disponíveis.
        </p>

        <Semesters>
          <button
            data-testid="button-all"
            className={`${selectedSemester === 'all' && 'selected'}`}
            onClick={() => setSelectedSemester('all')}
            type="button"
          >
            Todos os semestres
          </button>
          <button
            data-testid="button-2019.2"
            className={`${selectedSemester === '2019.2' && 'selected'}`}
            onClick={() => setSelectedSemester('2019.2')}
            type="button"
          >
            2º semestre de 2019
          </button>
          <button
            data-testid="button-2020.1"
            className={`${selectedSemester === '2020.1' && 'selected'}`}
            onClick={() => setSelectedSemester('2020.1')}
            type="button"
          >
            1º semestre de 2020
          </button>
        </Semesters>

        <CardsContainer>
          <Components.AddCourseCard onClick={() => setOpenModal(!openModal)} />

          {scholarships.map((scholarship, index) => (
            <Components.CourseCard
              key={`courseCard_scholarship_${index}`}
              scholarship={scholarship}
              onRemoveItem={() => removeScholarship(scholarship)}
            />
          ))}
        </CardsContainer>
      </Container>

      <Components.Modal
        visibility={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
};
