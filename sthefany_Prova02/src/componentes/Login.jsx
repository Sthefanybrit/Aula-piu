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
 
  function mudarCor() {
    const elemento = document.getElementById("meuElemento");
      if (elemento.style.backgroundColor === "red") {
      elemento.style.backgroundColor = "blue";
  }   else {
      elemento.style.backgroundColor = "red";
  }
}

  const cores = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" placeholder="Login" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
        <button type="submit" onClick="mudarcor">Entrar</button>
      </form>
      {logado && <p style={{ color: "green" }}>Usuário logado com sucesso!</p>}
    </div>
  );
}