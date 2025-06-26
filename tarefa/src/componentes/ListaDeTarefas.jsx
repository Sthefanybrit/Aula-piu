import React, { useState } from 'react';
import '../App.css';  // importe o CSS

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleChange = (event) => {
    setTarefa(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
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
        <button type="submit" onClick={handleSubmit}>
          Adicionar
        </button>
      </form>

      {tarefas.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tarefa</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaDeTarefas;



