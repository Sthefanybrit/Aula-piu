import "./App.css";
import { ThemeSwitcher } from "./componentes/ThemeSwitcher";
import { InputBackgroundChanger } from "./componentes/InputBackgroundChanger";
import { Login } from "./componentes/Login";
import { ListaDePosts } from "./componentes/ListaDePosts";
import GerenciadorTarefas from "./componentes/GerenciadorTarefas";

function App() {
  return (
    <div className="App">
      <h1>Revisão Prova</h1>
      <ThemeSwitcher />
      <InputBackgroundChanger />
      <Login />
      <ListaDePosts />
      <GerenciadorTarefas />
    </div>
  );
}

export default App;