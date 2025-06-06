import "./App.css";
import "./styles/global.css";
import "./styles/theme.css";
import { AppContainer, TogglersContainer } from "./styles/app.css";
import { lightTheme, darkTheme } from "./styles/theme.css";
import { ToggleDarkMode, LanguageSelector, Navbar, Footer } from "@components";
import useToggleDarkMode from "@hooks/useToggleDarkMode";
import {
  HomeSection,
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "./sections";

function App() {
  const { darkMode, setDarkMode } = useToggleDarkMode();

  return (
    <div className={`${AppContainer} ${darkMode ? darkTheme : lightTheme}`}>
      <div className={TogglersContainer}>
        <ToggleDarkMode state={[darkMode, setDarkMode]} />
        <LanguageSelector />
      </div>
      <main>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
