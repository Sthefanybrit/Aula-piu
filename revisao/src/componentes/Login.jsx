// src/componentes/Login.jsx
import { useState } from "react";

export function Login() {
  const [formData, setFormData] = useState({ login: "", senha: "" });
  const [logado, setLogado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de login:", formData);
    setLogado(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" placeholder="Login" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Entrar</button>
      </form>
      {logado && <p style={{ color: "green" }}>Usuário logado com sucesso!</p>}
    </div>
  );
}
