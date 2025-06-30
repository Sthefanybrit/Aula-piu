import '../App.css';
import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleChange = (event) => {
    setTarefa(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa.trim() !== '') {
      setTarefas([
        ...tarefas,
        { texto: tarefa, status: 'pendente' }
      ]);
      setTarefa('');
    }
  };

  const handleReset = () => {
    setTarefas([]);
  };

  const alterarStatus = (index, novoStatus) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].status = novoStatus;
    setTarefas(novasTarefas);
  };

  const moverTarefa = (index, direcao) => {
    const novasTarefas = [...tarefas];
    const novaPosicao = index + direcao;

    if (novaPosicao >= 0 && novaPosicao < tarefas.length) {
      const temp = novasTarefas[index];
      novasTarefas[index] = novasTarefas[novaPosicao];
      novasTarefas[novaPosicao] = temp;
      setTarefas(novasTarefas);
    }
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tarefa}
          onChange={handleChange}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.length === 0 ? (
            <tr>
              <td colSpan="4">Nenhuma tarefa adicionada</td>
            </tr>
          ) : (
            tarefas.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.texto}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="acao realizada"
                    onClick={() => alterarStatus(index, 'realizada')}
                  >
                    ✅
                  </button>
                  <button
                    className="acao nao-realizada"
                    onClick={() => alterarStatus(index, 'não realizada')}
                  >
                    ❌
                  </button>
                  <button
                    className="acao pendente"
                    onClick={() => alterarStatus(index, 'pendente')}
                  >
                    ⏳
                  </button>
                  <button
                    className="acao subir"
                    onClick={() => moverTarefa(index, -1)}
                  >
                    ⬆️
                  </button>
                  <button
                    className="acao descer"
                    onClick={() => moverTarefa(index, 1)}
                  >
                    ⬇️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button id="limpar" type="button" onClick={handleReset} style={{ marginTop: '10px' }}>
        Resetar
      </button>
    </div>
  );
}

export default ListaDeTarefas;
