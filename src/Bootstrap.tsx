import { BrowserRouter } from 'react-router-dom';

import { MyThemeProvider } from 'hooks';
import Routes from 'routes';
import GlobalStyles from 'styles/global';

const Bootstrap: React.FC = () => {
  return (
    <>
      <MyThemeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MyThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;
