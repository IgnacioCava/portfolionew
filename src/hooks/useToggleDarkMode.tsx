import { useState } from "react";

const useToggleDarkMode = () => {
  const hour = new Date().getHours();
  const isNightTime = hour >= 18 || hour < 7;
  
  const [darkMode, setDarkMode] = useState(isNightTime);

  return { darkMode, setDarkMode };
};

export default useToggleDarkMode;
