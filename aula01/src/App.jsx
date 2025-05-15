import './App.css'
import Escopo from './componentes/Escopo'
import Redux from './componentes/Redux'
import NovaAlteracao from './componentes/NovaAlteracao'
import Change from './componentes/Change'
import Conditional from './componentes/Conditional'
import Props from './componentes/Props'
import Card from './componentes/Card'
import Children from './componentes/Children'

function App(){

  return(
    <>
    {/*<Escopo/>*/}
    {/*<Redux/>*/}
    {/*<NovaAlteracao/>*/}
    {/* <Change/> */}
    {/*<Conditional/>*/}
    <Props nome={"React PIU"}/>
    <Card />
    <br />
    <Children>
      <Card/>
    </Children>
    </>

  )
}

export default App