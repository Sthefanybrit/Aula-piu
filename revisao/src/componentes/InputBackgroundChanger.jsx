// src/componentes/InputBackgroundChanger.jsx
import { useState, useEffect } from "react";

export function InputBackgroundChanger() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = texto.length > 5 ? "#cfc" : "#fcc";
  }, [texto]);

  return (
    <input
      type="text"
      placeholder="Digite algo"
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}
