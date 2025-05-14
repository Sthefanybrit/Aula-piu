import { useState } from "react"


export default function Change(){
    //let valor=0
    //let [valor, setValor] = useState(0)
    let [valor, setValor] = useState("nome")
    let [valor2, setValor2] = useState(1)

    function sets(){
        setValor(valor+valor2)
        setValor2 (valor2+1)
        
    }

    return(
        <>
        <div>
            <button onClick={sets}>{valor}Cliques</button>
            <p>{valor2}</p>
        </div>
        </>

    )

}