import { useEffect, useState } from "react";

export default function TabelaUsernames() {
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
      <h2 style={{ color: "green" }}>Tabela de Usernames</h2>
      <button onClick={() => setCarregar(true)}>Carregar Usernames</button>
      <table border="1">
        <thead>
          <tr><th>Username</th></tr>
        </thead>
        <tbody>
          {dados.map((user) => (
            <tr key={user.id}><td>{user.username}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}