function Escopo(){
    const label = "Clique aqui"
    function handleClick(){
        return(
            alert("alerta")
        )
    }
    return(
        <>
        <div>
            <h2>Teste Componentes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur iusto corporis earum eveniet! Autem, veritatis! Consectetur aspernatur accusamus ut hic quo, omnis, dignissimos officiis ratione sapiente soluta laborum et!</p>
        </div>
        <div>
            <button onClick={()=>console.log("Você clicou aqui!")}>{label}</button>
        </div>
        <div onClick={handleClick}>{label}</div>
        </>
    )
}

export default Escopo