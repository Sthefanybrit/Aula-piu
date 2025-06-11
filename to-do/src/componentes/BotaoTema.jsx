import React from "react";

const BotaoTema = ({ tema, mudarTema }) => {
  return (
    <button onClick={mudarTema} className="botao-tema">
      Modo {tema === "claro" ? "Escuro 🌙" : "Claro ☀️"}
    </button>
  );
};

export default BotaoTema;