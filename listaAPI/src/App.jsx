import React from 'react';
import TabelaName from './componentes/TabelaNomes';
import TabelaUsername from './componentes/TabelaUserName';
import TabelaCidade from './componentes/TabelaCidades';
import FormularioEnvio from './componentes/Formularioenvio.jsx';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Listagem de Usuários</h1>
      <TabelaName />
      <TabelaUsername />
      <TabelaCidade />
      <hr />
      <h2>Formulário de Envio</h2>
      <FormularioEnvio />
    </div>
  );
};

export default App;