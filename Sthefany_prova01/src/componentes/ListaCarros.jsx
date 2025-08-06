import React, { useState } from 'react';
import carrosIniciais from './dados_carros';
// aqui é toda a lista dos carros que foi enviado no gsa
export default function ListaCarros() {
  const [carros] = useState(carrosIniciais);
// vai usar o map para não precisar ficar listando todos os dados e pega so de um arquivo e ja da certo
// const maior = carros.filter(carro => carro.ano >= 2019); tentei mais não funcionou
  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            {carro.modelo} - {carro.cor}
          </li>
        ))}
      </ul>
    </div>
  );
}
