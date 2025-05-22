import { useState } from "react";
import "./index.css";

import barbie from "./assets/barbie.jpg";
import bob from "./assets/bob.jpg";
import cacau from "./assets/Cacau.jpg";
import stitch from "./assets/stitch.jpg";
import winx from "./assets/winx.jpg";
import yoda from "./assets/yoda.jpg";

export default function App() {
  const [tema, setTema] = useState("light");
  const [selecionado, setSelecionado] = useState(null);


const listaPersonagens = [
  { nome: "Barbie", imagem: barbie, descricao: "Boneca famosa, muito estilosa." },
  { nome: "Bob Esponja", imagem: bob, descricao: "Bob Esponja calça quadrada, mora no fundo do mar." },
  { nome: "Cacau", imagem: cacau, descricao: "Dragão doce e carinhosa da Histórinha de Dragões." },
  { nome: "Stitch", imagem: stitch, descricao: "Divertido e bagunceiro" },
  { nome: "Winx", imagem: winx, descricao: "Fada mágica e muito meiga." },
  { nome: "Yoda", imagem: yoda, descricao: "Baby sensivel." },
];

  function alternarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${tema}`}>
      <div className="tema">
        <button onClick={alternarTema}>
          Mudar para {tema === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="galeria">
        {listaPersonagens.map((p, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelecionado(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") setSelecionado(p); }}
          >
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className="detalhes">
          <h2>{selecionado.nome}</h2>
          <img
            src={selecionado.imagem}
            alt={selecionado.nome}
            className="imagem-detalhe"
          />
          <p>{selecionado.descricao}</p>
        </div>
      )}
    </div>
  );
}