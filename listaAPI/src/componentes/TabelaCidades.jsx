import { useEffect, useState } from "react";

export default function TabelaCidades() {
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
      <h2 style={{ color: "purple" }}>Tabela de Cidades</h2>
      <button onClick={() => setCarregar(true)}>Carregar Cidades</button>
      <table border="1">
        <thead>
          <tr><th>Cidade</th></tr>
        </thead>
        <tbody>
          {dados.map((user) => (
            <tr key={user.id}><td>{user.address.city}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}