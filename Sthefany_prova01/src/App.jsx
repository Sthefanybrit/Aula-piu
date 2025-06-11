import React from 'react';
import Contador from './componentes/Contador';
import ListaCarros from './componentes/ListaCarros';
// importando os arquivos 

export default function App() {
  return (
    <div>
      <Contador />
      <hr />
      <ListaCarros/>
      <hr />

    </div>
  );
}