import { ToggleDarkModeContainer, Toggler } from "./styles.css";
import { Sun, Moon } from "@assets/svg";

const ToggleDarkMode = ({
  state,
}: {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) => {
  const [darkMode, setDarkMode] = state;
  return (
    <div
      className={ToggleDarkModeContainer}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className={Toggler({ darkMode })}>
        {darkMode ? <Moon color="white" /> : <Sun color="#FFDE59" />}
      </div>
    </div>
  );
};

export default ToggleDarkMode