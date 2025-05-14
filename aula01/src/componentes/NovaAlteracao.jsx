import { useState } from "react";

function NovaAlteracao() {
    const [cor, setCor] = useState("white");

    function alterarCor() {
        const novaCor = cor === "white" ? "#e0d4fd" : "white";
        setCor(novaCor);
    }

    return (
        <div style={{ backgroundColor: cor, padding: "20px", minHeight: "100vh" }}>
            <h2>Sou top</h2>
            <p>Clique no botão abaixo e veja a mágica acontecendo.</p>
            <button onClick={alterarCor}>
                Clique para ver!!
            </button>
        </div>
    );
}

export default NovaAlteracao
