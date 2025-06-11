import React from "react";

const Painel = ({ children }) => {
  return (
    <div className="painel">
      <h2>Minhas Tarefas</h2>
      {children}
    </div>
  );
};

export default Painel;
