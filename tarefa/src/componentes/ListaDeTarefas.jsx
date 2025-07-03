import '../App.css';
import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [prazo, setPrazo] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const handleChangeTarefa = (event) => {
    setTarefa(event.target.value);
  };

  const handleChangePrazo = (event) => {
    setPrazo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa.trim() !== '') {
      setTarefas([
        ...tarefas,
        {
          texto: tarefa,
          prazo: prazo || null,
          status: 'Não-concluída',
        }
      ]);
      setTarefa('');
      setPrazo('');
    }
  };

  const handleReset = () => {
    setTarefas([]);
    setFiltro('todas');
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

  const verificarStatusVisual = (prazo, status) => {
    if (status === 'Concluída') return { cor: '#4caf50', texto: '✅ Concluída' };
    if (!prazo) return { cor: '#9e9e9e', texto: '❔ Sem prazo' };

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const dataPrazo = new Date(prazo);
    dataPrazo.setHours(0, 0, 0, 0);

    if (dataPrazo < hoje) return { cor: '#c76c5e', texto: '🔴 Vencida' };
    if (dataPrazo.getTime() === hoje.getTime()) return { cor: '#d7b56d', texto: '🟡 Vence hoje' };
    return { cor: '#a78a69', texto: '🟢 Em dia' };
  };

  const tarefasFiltradas = tarefas
    .filter((t) => {
      if (filtro === 'todas') return true;
      if (filtro === 'com-prazo') return t.prazo !== null && t.prazo !== '';
      return t.status === filtro;
    })
    .sort((a, b) => {
      if (!a.prazo) return 1;
      if (!b.prazo) return -1;
      return new Date(a.prazo) - new Date(b.prazo);
    });

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '720px', width: '100%', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="text"
          value={tarefa}
          onChange={handleChangeTarefa}
          placeholder="Digite uma tarefa"
          style={{ flex: '1 1 250px' }}
        />
        <input
          type="date"
          value={prazo}
          onChange={handleChangePrazo}
          style={{ flex: '0 0 160px' }}
        />
        <button type="submit" style={{ flex: '0 0 120px' }}>
          Adicionar
        </button>
      </form>

      <div style={{ marginTop: '16px', maxWidth: '720px', textAlign: 'center' }} role="group" aria-label="Filtros da lista de tarefas">
        <button onClick={() => setFiltro('todas')} aria-pressed={filtro === 'todas'}>Todas</button>
        <button onClick={() => setFiltro('Concluída')} aria-pressed={filtro === 'Concluída'}>Concluídas</button>
        <button onClick={() => setFiltro('Não-concluída')} aria-pressed={filtro === 'Não-concluída'}>Não-concluídas</button>
        <button onClick={() => setFiltro('com-prazo')} aria-pressed={filtro === 'com-prazo'}>Com Prazo</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th>Prazo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefasFiltradas.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhuma tarefa encontrada</td>
            </tr>
          ) : (
            tarefasFiltradas.map((item, index) => {
              const indexOriginal = tarefas.indexOf(item);
              const statusVisual = verificarStatusVisual(item.prazo, item.status);
              return (
                <tr key={indexOriginal}>
                  <td>{index + 1}</td>
                  <td>
                    <span>{item.texto}</span>
                    <br />
                    <small style={{ color: statusVisual.cor }}>{statusVisual.texto}</small>
                  </td>
                  <td>{item.prazo ? item.prazo : '-'}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="acao realizada"
                      onClick={() => alterarStatus(indexOriginal, 'Concluída')}
                      title="Marcar como concluída"
                    >
                      ✅
                    </button>
                    <button
                      className="acao nao-realizada"
                      onClick={() => alterarStatus(indexOriginal, 'Não-concluída')}
                      title="Marcar como não concluída"
                    >
                      ❌
                    </button>
                    <button
                      className="acao subir"
                      onClick={() => moverTarefa(indexOriginal, -1)}
                      title="Mover para cima"
                    >
                      ⬆
                    </button>
                    <button
                      className="acao descer"
                      onClick={() => moverTarefa(indexOriginal, 1)}
                      title="Mover para baixo"
                    >
                      ⬇
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <button id="limpar" type="button" onClick={handleReset}>Resetar</button>
    </div>
  );
}

export default ListaDeTarefas;
