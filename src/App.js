import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import { theme } from './components/variables';

import { PageHeader } from './components/header/Header';
import { PageBanner } from './components/banner/Banner';

const App = () => {
  return (
    <div className="App">
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader />
        <PageBanner />
      </ThemeProvider>
    </div>
  );
};

export default App;
