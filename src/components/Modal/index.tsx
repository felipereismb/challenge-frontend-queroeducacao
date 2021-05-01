/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useCallback, useRef } from 'react';

// Components
import * as Components from 'components';

// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Models
import IItemDropdown from 'components/Dropdown/IItemDropdown';
import IScholarship from 'models/IScholarship';

// Utils
import { handleClickOutside } from 'utils/handleClickOutside';

// Services
import { getAllCities, getAllCourses, getScholarship } from 'services';

// Styles
import { Container, Card, ModalContent, Courses } from './styles';

interface Props {
  handleClose: () => void;
  visibility: boolean;
}

export const Modal: React.FC<Props> = ({ handleClose, visibility }) => {
  const [filteredScholarship, setFilteredScholarship] = useState<
    IScholarship[]
  >([]);
  const [sort, setSort] = useState<string>('name');
  const [sortOpen, setSortOpen] = useState(false);
  const [valueCanPay, setValueCanPay] = useState<string>('10000');
  const [checkedPresential, setCheckedPresential] = useState<boolean>(false);
  const [checkedDistance, setCheckedDistance] = useState<boolean>(false);
  const [selectedCitie, setSelectedCitie] = useState<IItemDropdown>(() => {
    return {} as IItemDropdown;
  });
  const [selectedCourse, setSelectedCourse] = useState<IItemDropdown>(() => {
    return {} as IItemDropdown;
  });
  const [selectedScholarship, setSelectedScholarship] = useState<number[]>([]);

  const wrapperRef = useRef(document.createElement('div'));
  useEffect(() => {
    handleClickOutside(wrapperRef, setSortOpen);
  }, [wrapperRef]);

  useEffect(() => {
    const params = {
      isDistance: checkedDistance,
      isPresential: checkedPresential,
      course: selectedCourse.value,
      city: selectedCitie.value,
      max_amount: valueCanPay,
      sort: sort,
    };
    const scholarship = getScholarship(params);
    setSelectedScholarship([]);
    setFilteredScholarship(scholarship);
  }, [
    valueCanPay,
    checkedDistance,
    checkedPresential,
    selectedCourse,
    selectedCitie,
    sort,
  ]);

  const handleChangeSelectedCourses = useCallback((index: number) => {
    setSelectedScholarship(prevState => {
      const aux = [...prevState];
      const i = prevState.indexOf(index);
      if (i !== -1) {
        aux.splice(i, 1);
      } else {
        aux.push(index);
      }
      return aux;
    });
  }, []);

  const onClickClose = () => {
    const aux = {} as IItemDropdown;
    setValueCanPay('10000');
    setCheckedPresential(false);
    setCheckedDistance(false);
    setSelectedCitie(aux);
    setSelectedCourse(aux);
    handleClose();
  };

  const addScholarships = () => {
    let aux: IScholarship[] = [];
    const itens = localStorage.getItem('selectedScholarship');
    if (itens) {
      aux = JSON.parse(itens);
    }
    selectedScholarship.forEach(index => {
      aux.push(filteredScholarship[index]);
    });

    localStorage.setItem('selectedScholarship', JSON.stringify(aux));
    onClickClose();
  };

  return (
    <Container visibility={visibility}>
      <div className="modal-close">
        <button
          data-testid="button-close-modal"
          type="button"
          onClick={onClickClose}
        >
          X
        </button>
      </div>
      <ModalContent visibility={visibility}>
        <Card>
          <h1>Adicionar Bolsa</h1>
          <p>Filtre e adicione as bolsas do seu interesse</p>

          <div className="dropdowns">
            <Components.Dropdown
              titleDropdown="SELECIONE SUA CIDADE"
              placeholder=""
              selectedValue={selectedCitie.label}
              itens={getAllCities()}
              onChangeOption={(item: IItemDropdown) => setSelectedCitie(item)}
            />

            <Components.Dropdown
              titleDropdown="SELECIONE O CURSO DE SUA PREFERÊNCIA"
              placeholder=""
              selectedValue={selectedCourse.label}
              itens={getAllCourses()}
              onChangeOption={(item: IItemDropdown) => setSelectedCourse(item)}
            />
          </div>

          <div className="wrapper">
            <div className="modality">
              <span>COMO VOCÊ QUER ESTUDAR?</span>
              <div>
                <div className="checkbox">
                  <input
                    data-testid="checkedPresential"
                    type="checkbox"
                    checked={checkedPresential}
                    onChange={() => setCheckedPresential(!checkedPresential)}
                  />
                  <span>Presencial</span>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    data-testid="checkedDistance"
                    checked={checkedDistance}
                    onChange={() => setCheckedDistance(!checkedDistance)}
                  />
                  <span>A Distância</span>
                </div>
              </div>
            </div>

            <div className="howMuch">
              <span>ATÉ QUANTO PODE PAGAR?</span>
              <p>
                {`${parseInt(valueCanPay, 10).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}`}
              </p>
              <Components.Slider
                min={50}
                max={10000}
                value={valueCanPay}
                onChange={e => setValueCanPay(e.target.value)}
              />
            </div>
          </div>

          <div className="result">
            <span>Resultado:</span>
            <div ref={wrapperRef}>
              Ordenar por{' '}
              <p
                data-testid="wrapperSort"
                className="primaryBlue"
                onClick={() => setSortOpen(!sortOpen)}
              >
                {sort === 'name' && 'Nome da Faculdade'}
                {sort === 'start-date' && 'Data de Início'}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  transform={{ rotate: sortOpen ? 180 : 360 }}
                />
              </p>
              {sortOpen && (
                <div className="wrapperSort">
                  <p
                    data-testid="optionSortName"
                    onClick={() => {
                      setSortOpen(!sortOpen);
                      setSort('name');
                    }}
                  >
                    Nome da Faculdade
                  </p>
                  <p
                    data-testid="optionSortStartDate"
                    onClick={() => {
                      setSortOpen(!sortOpen);
                      setSort('start-date');
                    }}
                  >
                    Data de Início
                  </p>
                </div>
              )}
            </div>
          </div>

          <Courses>
            {filteredScholarship.map((scholarship: IScholarship, i: number) => (
              <Components.CourseItem
                key={`courseList_${i}`}
                scholarship={scholarship}
                onChange={() => handleChangeSelectedCourses(i)}
                checked={selectedScholarship.includes(i)}
              />
            ))}
          </Courses>

          <div className="buttons">
            <Components.Button onClick={onClickClose}>
              Cancelar
            </Components.Button>
            <Components.Button
              data-testid="button-add-scholarships"
              variant="secondary"
              onClick={addScholarships}
              disabled={selectedScholarship.length === 0}
            >
              Adicionar Bolsa(s)
            </Components.Button>
          </div>
        </Card>
      </ModalContent>
    </Container>
  );
};
