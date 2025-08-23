import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Button />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);
  return <h1>Current Theme: {theme}</h1>;
}

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}

export default App;
