import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {

  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Theme: {theme}
    </button>
  );
}

export default ThemeToggle;