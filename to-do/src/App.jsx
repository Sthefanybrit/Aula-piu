import React, { useState } from "react";
import { tarefas as tarefasIniciais } from "./dados/tarefas";
import ListaTarefas from "./componentes/ListaTarefas";
import Painel from "./componentes/Painel";
import BotaoTema from "./componentes/BotaoTema";
import Tarefa from "./componentes/Tarefa";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [tema, setTema] = useState("claro");

  const alternarTarefa = (id) => {
    const atualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, feita: !t.feita } : t
    );
    setTarefas(atualizadas);
  };

  const mudarTema = () => {
    setTema((t) => (t === "claro" ? "escuro" : "claro"));
  };

  return (
    <div className={`app ${tema}`}>
      <BotaoTema tema={tema} mudarTema={mudarTema} />
      <Painel>
        <ListaTarefas tarefas={tarefas} aoClicar={alternarTarefa} />
      </Painel>
    </div>
  );
}

export default App;
