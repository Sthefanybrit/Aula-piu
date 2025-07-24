import React, { useEffect, useState } from "react";

export default function CityTable({ extras }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar cidades:", err));
  }, []);

  return (
    <div className="tabela">
      <h3>Cidade</h3>
      <table>
        <thead>
          <tr>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={"user-" + user.id}>
              <td>{user.address.city}</td>
            </tr>
          ))}
          {extras.length === 0 && users.length === 0 && (
            <tr>
              <td style={{ fontStyle: "italic", color: "#777" }}>Sem dados</td>
            </tr>
          )}
          {extras.map((item, i) => (
            <tr key={"extra-city-" + i}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
