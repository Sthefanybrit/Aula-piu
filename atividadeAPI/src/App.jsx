import React, { useState, useEffect } from "react";
import FormularioEnvio from "./componentes/FormularioEnvio";
import NameTable from "./componentes/NameTable";
import UsernameTable from "./componentes/UserNameTable";
import CityTable from "./componentes/CityTable";
import "./App.css";

function App() {
  // Dados da API
  const [dadosName, setDadosName] = useState([]);
  const [dadosUsername, setDadosUsername] = useState([]);
  const [dadosCity, setDadosCity] = useState([]);

  // Mensagem de sucesso
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  // 🔁 Carregar dados da API ao iniciar
  useEffect(() => {
    fetch("http://localhost:8000/usuarios")
      .then((res) => res.json())
      .then((apiData) => {
        setDadosName(apiData.name || []);
        setDadosUsername(apiData.username || []);
        setDadosCity(apiData.city || []);
      })
      .catch((err) => console.error("Erro ao buscar da API:", err));
  }, []);

  // Enviar dado novo para a API
  const aoEnviar = (novoDado, destino) => {
    const payload = {
      nome: novoDado,
      destino: destino,
    };

    fetch("http://localhost:8000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((resposta) => {
        if (destino === "name") setDadosName((prev) => [...prev, novoDado]);
        else if (destino === "username") setDadosUsername((prev) => [...prev, novoDado]);
        else if (destino === "city") setDadosCity((prev) => [...prev, novoDado]);

        setMensagemSucesso("Dados enviados com sucesso!");
        setTimeout(() => setMensagemSucesso(""), 3000);
      })
      .catch((err) => {
        console.error("Erro ao enviar:", err);
        setMensagemSucesso("Erro ao enviar dado.");
      });
  };

  const resetarDados = () => {
    setDadosName([]);
    setDadosUsername([]);
    setDadosCity([]);
    setMensagemSucesso("");
  };

  return (
    <div className="app-container">
      <FormularioEnvio aoEnviar={aoEnviar} />

      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

      <div className="resetar-container">
        <button className="btn-resetar" onClick={resetarDados}>
          Resetar dados adicionados
        </button>
      </div>

      <div className="tabela-container">
        <NameTable extras={dadosName} />
        <UsernameTable extras={dadosUsername} />
        <CityTable extras={dadosCity} />
      </div>
    </div>
  );
}

export default App;
