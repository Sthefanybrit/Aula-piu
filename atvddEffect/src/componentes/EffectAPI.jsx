import React, { useState, useEffect } from "react";

const EffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [loading, setLoading] = useState(false); // opcional: para exibir "carregando"

  useEffect(() => {
    if (loadData) {
      setLoading(true);

      fetch("http://127.0.0.1:8000/users")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erro na resposta da API");
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);
          setLoading(false);
          setLoadData(false);
        })
        .catch((err) => {
          console.error("❌ Erro ao buscar usuários:", err);
          setLoading(false);
          setLoadData(false);
        });
    }
  }, [loadData]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Listagem de Usuários (FastAPI)</h1>

      <button
        onClick={() => setLoadData(true)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Carregar Dados da API
      </button>

      {/* Exibir mensagem de carregamento */}
      {loading && <p>🔄 Carregando dados...</p>}

      {/* Exibir tabelas somente se tiver dados */}
      {users.length > 0 && (
        <>
          {/* Tabela de Nomes */}
          <h2 style={{ color: "blue" }}>Tabela de Nomes</h2>
          <table style={{ border: "2px solid blue", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#cce5ff" }}>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabela de Usernames */}
          <h2 style={{ color: "green" }}>Tabela de Usernames</h2>
          <table style={{ border: "2px solid green", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#d4edda" }}>
                <th>ID</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabela de Cidades */}
          <h2 style={{ color: "purple" }}>Tabela de Cidades</h2>
          <table style={{ border: "2px solid purple", width: "100%" }}>
            <thead>
              <tr style={{ backgroundColor: "#f3e6ff" }}>
                <th>ID</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default EffectAPI;
