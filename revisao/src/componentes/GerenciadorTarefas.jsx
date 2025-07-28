import React, { useState, useEffect } from 'react';

function GerenciadorTarefas() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [concluida, setConcluida] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const carregarTarefas = () => {
    fetch('http://localhost:8000/tarefas')
      .then(res => res.json())
      .then(data => setTarefas(data))
      .catch(err => console.error('Erro ao buscar tarefas:', err));
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const enviarTarefaAPI = (tarefa) => {
    return fetch('http://localhost:8000/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err));
        }
        return res.json();
      });
  };

  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) return;

    const nova = {
      nome: novaTarefa.trim(),
      concluida: concluida,
    };

    enviarTarefaAPI(nova)
      .then((resposta) => {
        console.log('Tarefa enviada:', resposta);
        setMensagem('Tarefa enviada com sucesso!');
        setNovaTarefa('');
        setConcluida(false);
        carregarTarefas();
      })
      .catch(() => {
        setMensagem('Erro ao enviar tarefa.');
      });
  };

  const resetarTarefasAPI = () => {
    fetch('http://localhost:8000/tarefas', {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err));
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        setMensagem('Todas as tarefas foram removidas.');
        setTarefas([]);  // limpa a lista local
      })
      .catch(() => {
        setMensagem('Erro ao resetar tarefas.');
      });
  };

  return (
    <div>
      <h2>Gerenciador de Tarefas</h2>

      <input
        type="text"
        value={novaTarefa}
        onChange={e => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />

      <label style={{ marginLeft: '10px' }}>
        <input
          type="checkbox"
          checked={concluida}
          onChange={e => setConcluida(e.target.checked)}
        /> Concluída
      </label>

      <button onClick={adicionarTarefa} style={{ marginLeft: '10px' }}>
        Enviar para API
      </button>

      <button onClick={resetarTarefasAPI} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
        Resetar Tarefas
      </button>

      {mensagem && (
        <p style={{ color: mensagem.includes('Erro') ? 'red' : 'green' }}>
          {mensagem}
        </p>
      )}

      <ul>
        {tarefas.map((tarefa, i) => (
          <li key={i}>
            <strong>{tarefa.nome}</strong> {tarefa.concluida ? '(Concluída)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GerenciadorTarefas;
