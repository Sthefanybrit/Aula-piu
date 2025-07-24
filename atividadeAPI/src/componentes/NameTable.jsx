import React, { useEffect, useState } from "react";

export default function NameTable({ extras }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar nomes:", err));
  }, []);

  return (
    <div className="tabela">
      <h3>Nome</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={"user-" + user.id}>
              <td>{user.name}</td>
            </tr>
          ))}
          {extras.length === 0 && users.length === 0 && (
            <tr>
              <td style={{ fontStyle: "italic", color: "#777" }}>Sem dados</td>
            </tr>
          )}
          {extras.map((item, i) => (
            <tr key={"extra-name-" + i}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
