// src/componentes/ThemeSwitcher.jsx
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#333" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        Mudar para {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
