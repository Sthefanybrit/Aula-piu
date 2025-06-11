import React from "react";
import Tarefa from "./Tarefa";

const ListaTarefas = ({ tarefas, aoClicar }) => {
  return (
    <div>
      {tarefas.map((t) => (
        <Tarefa key={t.id} tarefa={t} aoClicar={aoClicar} />
      ))}
    </div>
  );
};

export default ListaTarefas;
