import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import { PageHeader } from './components/header/Header';
import { theme } from './components/variables';

const App = () => {
  return (
    <div className="App">
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader />
        reaact
      </ThemeProvider>
    </div>
  );
};

export default App;
