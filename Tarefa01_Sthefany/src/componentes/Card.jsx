function Card({ nome, imagem, aoClicar }) {
  return (
    <div className="card" onClick={aoClicar}>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
    </div>
  );
}

export default Card;