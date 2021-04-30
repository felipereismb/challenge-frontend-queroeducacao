import { Container } from './styles';

import IScholarship from 'models/IScholarship';

interface Props {
  scholarship: IScholarship;
  onChange: (checked: boolean) => void;
  checked: boolean;
}

export const CourseItem: React.FC<Props> = ({
  scholarship,
  onChange,
  checked,
}) => {
  return (
    <>
      <hr />
      <Container>
        <div>
          <input
            type="checkbox"
            onChange={() => onChange(!checked)}
            checked={checked}
          />

          <img
            src={scholarship.university.logo_url}
            alt={`Logo universidade ${scholarship.university.name}`}
          />

          <div>
            <p>{scholarship.course.name}</p>
            <p>{scholarship.course.level}</p>
          </div>
        </div>

        <div className="scholarship">
          <p>
            Bolsa de{' '}
            <span>
              {scholarship.discount_percentage.toLocaleString('pt-br')}%
            </span>
          </p>
          <p className="currency">
            {scholarship.price_with_discount.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            })}
            /mês
          </p>
        </div>
      </Container>
    </>
  );
};
