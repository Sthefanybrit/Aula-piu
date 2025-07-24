import React, { useState } from "react";

export default function FormularioEnvio({ aoEnviar }) {
  const [formData, setFormData] = useState({
    valor: "",
    destino: "name",
  });
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = formData.valor.trim();
    if (!nome) return;

    // Atualiza visualmente
    aoEnviar(nome, formData.destino);

    // Envia para API FastAPI (sem email agora!)
    try {
      const resposta = await fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome }), // só nome
      });

      if (!resposta.ok) {
        throw new Error("Erro ao enviar para a API");
      }

      const resultado = await resposta.json();
      console.log("Enviado para API:", resultado);
      setMensagem(`Usuário "${resultado.nome}" enviado com sucesso para API!`);

    } catch (erro) {
      console.error("Erro:", erro);
      setMensagem("Erro ao enviar dados para a API.");
    }

    setFormData({ valor: "", destino: "name" });

    // Limpa a mensagem após 3s
    setTimeout(() => setMensagem(""), 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formulario-envio">
        <input
          name="valor"
          type="text"
          placeholder="Digite o nome"
          value={formData.valor}
          onChange={handleChange}
          required
          autoFocus
        />
        <select
          name="destino"
          value={formData.destino}
          onChange={handleChange}
        >
          <option value="name">Nome</option>
          <option value="username">Username</option>
          <option value="city">Cidade</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
    </>
  );
}
