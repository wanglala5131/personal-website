import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import { theme } from './components/variables';

import { PageHeader } from './components/header/Header';
import { PageBanner } from './components/banner/Banner';
import { About } from './components/about/About';
import { Skill } from './components/skill/Skill';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';

const App = () => {
  return (
    <div className="App">
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader />
        <PageBanner />
        <About />
        <Skill />
        <Experience />
        <Projects />
      </ThemeProvider>
    </div>
  );
};

export default App;
