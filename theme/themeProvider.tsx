import { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./themeContext";
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT;
type childrenProps = {
    children:ReactNode
}
export const ThemeProvider:FC<childrenProps> = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);
  return (
    <ThemeContext.Provider
      value={defaultProps}
    >
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
