function Detalhes({ personagem }) {
  if (!personagem) return null;

  return (
    <div className="detalhes">
      <h2>{personagem.nome}</h2>
      <img src={personagem.imagem} alt={personagem.nome} className="imagem-detalhe" />
      <p>{personagem.descricao}</p>
    </div>
  );
}

export default Detalhes;