import { useState, useEffect } from 'react';

import * as Components from 'components';
import IItemDropdown from 'components/Dropdown/IItemDropdown';
import IScholarship from 'models/IScholarship';

import { getAllCities, getAllCourses, getScholarship } from 'services';

import { Container, Card, ModalContent, Courses } from './styles';
import { useCallback } from 'react';

interface Props {
  handleClose: () => void;
  visibility: boolean;
}

export const Modal: React.FC<Props> = ({ handleClose, visibility }) => {
  const [filteredScholarship, setFilteredScholarship] = useState<
    IScholarship[]
  >([]);
  const [valueCanPay, setValueCanPay] = useState<string>('10000');
  const [checkedPresential, setCheckedPresential] = useState<boolean>(false);
  const [checkedDistance, setCheckedDistance] = useState<boolean>(false);
  const [selectedCitie, setSelectedCitie] = useState<IItemDropdown>(() => {
    return {} as IItemDropdown;
  });
  const [selectedCourse, setSelectedCourse] = useState<IItemDropdown>(() => {
    return {} as IItemDropdown;
  });
  const [selectedScholarship, setSelectedScholarship] = useState<
    IScholarship[]
  >([]);

  useEffect(() => {
    const params = {
      isDistance: checkedDistance,
      isPresential: checkedPresential,
      course: selectedCourse.value,
      city: selectedCitie.value,
      max_amount: valueCanPay,
    };
    const scholarship = getScholarship(params);
    setFilteredScholarship(scholarship);
  }, [
    valueCanPay,
    checkedDistance,
    checkedPresential,
    selectedCourse,
    selectedCitie,
  ]);

  const handleChangeSelectedCourses = useCallback(
    (checked: boolean, scholarship: IScholarship) => {
      const aux = [...selectedScholarship];
      console.log('checked');
      console.log(checked);
      console.log('aux');
      console.log(aux);

      if (checked) {
        aux.push(scholarship);
      } else {
        const i = aux.indexOf(scholarship);
        aux.splice(i, 1);
      }
      console.log('novo aux');
      console.log(aux);
      setSelectedScholarship(aux);
    },
    [],
  );

  return (
    <Container visibility={visibility}>
      <ModalContent>
        <button type="button" onClick={handleClose}>
          X
        </button>
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
                    type="checkbox"
                    checked={checkedPresential}
                    onClick={() => setCheckedPresential(!checkedPresential)}
                  />
                  <span>Presencial</span>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={checkedDistance}
                    onClick={() => setCheckedDistance(!checkedDistance)}
                  />
                  <span>A Distáncia</span>
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
            <span>
              Ordenar por <span className="primaryBlue">Nome da Faculdade</span>
            </span>
          </div>

          <Courses>
            {filteredScholarship.map((scholarship: IScholarship, i: number) => (
              <Components.CourseItem
                key={`courseList_${i}`}
                scholarship={scholarship}
                onChange={(checked: boolean) =>
                  handleChangeSelectedCourses(checked, scholarship)
                }
                checked={selectedScholarship.includes(scholarship)}
              />
            ))}
          </Courses>
        </Card>
      </ModalContent>
    </Container>
  );
};
