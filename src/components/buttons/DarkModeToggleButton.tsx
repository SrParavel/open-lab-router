import { useDarkMode } from "../../hooks/useDarkMode";
import IconButton from "./IconButton";
import { LuMoon, LuSun } from "react-icons/lu";

function DarkModeToggleButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton icon={isDarkMode ? LuSun : LuMoon} onClick={toggleDarkMode}>
      Modo {isDarkMode ? "claro" : "oscuro"}
    </IconButton>
  );
}

export default DarkModeToggleButton;
