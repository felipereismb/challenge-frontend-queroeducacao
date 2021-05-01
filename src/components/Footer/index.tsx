// Icons
import { ReactComponent as Whatsapp } from 'assets/svgs/whatsapp.svg';
import {
  faHeart,
  faComments,
  faEnvelope,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="contacts">
        <div className="whatsapp">
          <Whatsapp fill="white" stroke="white" width="30" height="auto" />
          <div>
            <p>0800 123 2222</p>
            <span>Seg - Sex 8h-22h</span>
          </div>
        </div>

        <div className="all-others">
          <div className="item">
            <FontAwesomeIcon icon={faComments} size="2x" />
            <div className="mobile">Chat</div>
            <div className="desktop">
              <p>Chat ao vivo</p>
              <span>Seg - Sex 8h-22h</span>
            </div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <div className="mobile">E-mail</div>
            <div className="desktop">
              <p>Mande um e-mail</p>
              <span>Respondemos rapidinho</span>
            </div>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            <div className="mobile">Ajuda</div>
            <div className="desktop">
              <p>Central de ajuda</p>
              <span>Encontre todas as respostas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="made-by-quero">
        Feito com <FontAwesomeIcon icon={faHeart} /> pela Quero Educação
      </div>
    </Container>
  );
};
