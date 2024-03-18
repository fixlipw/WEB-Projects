const FuncoesInternas = () => {

    let num_1 = 10
    let num_2 = 5
    let num_3 = 3.1424782352

    const somar = (x, y) => x + y;

    const subtrair = (x, y) => x - y;

    const multiplicar = (x, y) => x * y;

    const dividir = (x, y) => x / y;

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>O resultado da soma é: {somar(num_1, num_2)}</h3>
            <h3>O resultado da subtração é: {subtrair(num_1, num_2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(num_1, num_2)}</h3>
            <h3>O resultado da divisão é: {dividir(num_1, num_2)}</h3>
            <h4>{num_3.toFixed(3)}</h4>
        </div>
    )
}

export default FuncoesInternas