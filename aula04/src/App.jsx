import './App.css'
import ListasMap from './componentes/ListasMap'
import ListasFilter from './componentes/ListasFilter'
import ListasObj from './componentes/ListasObj'
import DropdownNomes from './componentes/DropdownNomes'

function App() {
  
  return (
    <>
    <DropdownNomes/>
    <br />
    <ListasMap />
    <br />
    <ListasFilter/>
    <br />
    <ListasObj/>
    </>
  )
}

export default App
