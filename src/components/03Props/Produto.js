const Produto = ({nome, categoria, preco}) => {

    //let objJSON = {nome: "Felipe de Sousa", idade:19, curso: "Sistemas de Informação"}

    return (
        <div>
            {/*{<h1>{objJSON.nome}</h1>}*/}
            <h3>Nome: {nome} </h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
export default Produto