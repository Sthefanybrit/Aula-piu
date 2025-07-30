import { useEffect, useState } from "react";

export default function TabelaNomes() {
  const [dados, setDados] = useState([]);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    if (carregar) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setDados(data));
    }
  }, [carregar]);

  return (
    <div>
      <h2 style={{ color: "blue" }}>Tabela de Nomes</h2>
      <button onClick={() => setCarregar(true)}>Carregar Nomes</button>
      <table border="1">
        <thead>
          <tr><th>Nome</th></tr>
        </thead>
        <tbody>
          {dados.map((user) => (
            <tr key={user.id}><td>{user.name}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}