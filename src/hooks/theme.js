import { useContext } from "react";
import { ThemeContext } from "../contexs/theme";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return [theme, setTheme];
};
