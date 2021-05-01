import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/svgs/logo-querobolsa.svg';
import { Menu, Divider } from 'components';

// Styles
import {
  Container,
  HeaderContainer,
  Info,
  InfoMobile,
  Account,
  AccountMobile,
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Info>
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <span>Como Funciona</span>

          <Divider />

          <div>
            <p>0800 123 2222</p>
            <p className="message">Envie mensagem ou ligue</p>
          </div>
        </Info>

        <InfoMobile>
          <div>
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            <span>Ajuda</span>
          </div>

          <Divider />
        </InfoMobile>

        <img src={logo} alt="Logo Quero Bolsa" />

        <Account>
          <span>Nome Sobrenome</span>
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
        </Account>

        <AccountMobile>
          <Divider />
          <div>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <span>Conta</span>
          </div>
        </AccountMobile>
      </HeaderContainer>

      <Menu />
    </Container>
  );
};
