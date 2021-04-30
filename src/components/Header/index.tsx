import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/svgs/logo-querobolsa.svg';
import { Menu, Divider } from 'components';

// Styles
import { Container, HeaderContainer, Info, Account } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Info>
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <span className="desktop">Como Funciona</span>

          <Divider />

          <div>
            <p>0800 123 2222</p>
            <p>Envie mensagem ou ligue</p>
          </div>
        </Info>

        <img src={logo} alt="Logo Quero Bolsa" />

        <Account>
          <span className="desktop">Nome Sobrenome</span>
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
        </Account>
      </HeaderContainer>
      <Menu />
    </Container>
  );
};
