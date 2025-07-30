import { useState } from "react";

export default function FormularioEnvio() {
  const [formData, setFormData] = useState({ nome: "", email: "" });

  const enviar = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro no envio");
        return res.json();
      })
      .then(() => alert("Enviado com sucesso!"))
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nome"
        required
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}