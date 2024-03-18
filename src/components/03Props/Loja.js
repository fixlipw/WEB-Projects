import Produto from "./Produto";

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr/>
            <Produto nome="Máquina de Lavar" categoria="Eletrodoméstico" preco={2300}/>
            <hr/>
            <Produto nome="The Colour and the Shape" categoria="Disco" preco={350}/>
            <hr/>
            <Produto nome="Pizza de Calabresa" categoria="Alimento" preco={35.50}/>
            <hr/>
        </div>
    )
}

export default Loja