// Components
import * as Components from 'components';

// Models
import IScholarship from 'models/IScholarship';

// styles
import { Container, Divider } from './styles';

interface Props {
  scholarship: IScholarship;
  onRemoveItem: () => void;
}

export const CourseCard: React.FC<Props> = ({ scholarship, onRemoveItem }) => {
  return (
    <Container>
      <img
        src={scholarship.university.logo_url}
        alt={`Faculdade ${scholarship.university.name}`}
      />

      <p>{scholarship.university.name}</p>
      <p className="primaryBlue">{scholarship.course.name}</p>

      <Divider />

      <div className="class-details">
        <p>
          {`${scholarship.course.kind} . ${scholarship.course.shift}`.toLocaleUpperCase()}
        </p>
        <p className="start-date">{`Inicio das aulas em: ${scholarship.start_date}`}</p>
      </div>

      <Divider />

      {scholarship.enabled && (
        <>
          <p>Mensalidade com o Quero Bolsa</p>
          <p className="full-price">
            {scholarship.full_price.toLocaleString('pt-br', {
              currency: 'BRL',
              style: 'currency',
            })}
          </p>
          <p className="green">
            {scholarship.price_with_discount.toLocaleString('pt-br', {
              currency: 'BRL',
              style: 'currency',
            })}
            <span> /mês</span>
          </p>
        </>
      )}

      {!scholarship.enabled && (
        <>
          <p>Bolsa Indisponível</p>
          <p>
            <span>
              Entre em contato com nosso <br />
              atendimento para saber mais.
            </span>
          </p>
        </>
      )}

      <div className="buttons">
        <Components.Button size="SM" onClick={onRemoveItem}>
          Excluir
        </Components.Button>
        <Components.Button
          size="SM"
          variant="secondary"
          disabled={!scholarship.enabled}
        >
          {scholarship.enabled ? 'Ver Oferta' : 'Indisponível'}
        </Components.Button>
      </div>
    </Container>
  );
};
