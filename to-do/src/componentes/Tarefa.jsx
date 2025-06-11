import React from "react";
import "./Tarefa.css";

const Tarefa = ({ tarefa, aoClicar }) => {
  return (
    <div className={`tarefa ${tarefa.feita ? "feita" : ""}`}>
      <span>{tarefa.titulo}</span>
      <button onClick={() => aoClicar(tarefa.id)}>
        {tarefa.feita ? "Desmarcar" : "Feita"}
      </button>
    </div>
  );
};

export default Tarefa;
