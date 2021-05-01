import { BrowserRouter } from 'react-router-dom';

import { Wrapper } from 'styles';
import Routes from 'routes';
import GlobalStyles from 'styles/global';

const Bootstrap: React.FC = () => {
  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Wrapper>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;
