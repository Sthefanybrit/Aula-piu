import React, { useState, useEffect } from 'react';

const Usuario = () => {
  const [usuarioId, setUsuarioId] = useState(1);         
  const [dados, setDados] = useState([]);                 
  const [novoAcesso, setNovoAcesso] = useState(false);      

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/albums');
        const todos = await resposta.json();
        const filtrados = todos.filter(item => item.userId === Number(usuarioId));
        setDados(filtrados);
      } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
      }
    };

    buscarDados();
  }, [novoAcesso]); 

  const handleInputChange = (e) => {
    const valor = Number(e.target.value);
    if (valor >= 1 && valor <= 10) {
      setUsuarioId(valor); 
    }
  };

  const handleNovoAcesso = () => {
    setNovoAcesso(prev => !prev); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Informações do userID </h2>

      <label>
        Digite o ID do usuário (1 a 10):
        <input
          type="number"
          min="1"
          max="10"
          value={usuarioId}
          onChange={handleInputChange}
          style={{ marginLeft: '10px', width: '60px' }}
        />
      </label>

      <button onClick={handleNovoAcesso} style={{ marginLeft: '20px', backgroundColor: 'Lavender' }}>
        Novo Acesso
      </button>

      <h3>Dados vinculados dos usuários {usuarioId}:</h3>
      {dados.length === 0 ? (
        <p>Nenhum dado encontrado.</p>
      ) : (
        <ul>
          {dados.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Usuario;