import React, { useState } from 'react';

// aqui vai usar para contar cada click a partir de zero;
export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    // aqui o contador vai aumentar o botão ao clicar e quanro passar de 10
    <div> 
      <h2>Contador: {contador}</h2>
      <button 
        onClick={() => setContador(contador + 1)}
        style={{ width: contador > 10  }}
      >        
        Incrementar
      </button>
      <button 
        onClick={() => setContador(contador - 1)}
        style={{ backgroundColor: contador < 0  }}
      >
        Decrementar
      </button>
    </div>
    // ja nessa parte de baixo vai para aparecer o valor negativo ao ser clicado
  );
}