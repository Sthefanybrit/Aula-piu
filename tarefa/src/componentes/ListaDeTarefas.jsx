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
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  const handleReset = () => {
    setTarefas([]);
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
        <tr>
            <th></th>
            <th>Tarefa</th>
        </tr>
        {tarefas.length === 0 ? (
            <tr>
            <td></td>
            <td></td>
            </tr>
        ) : (
            tarefas.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
            </tr>
            ))
        )}
    </table>

      <button  id='limpar' type="button" onClick={handleReset} style={{ marginTop: '10px' }}>
        Resetar
      </button>
    </div>
  );
}

export default ListaDeTarefas;
