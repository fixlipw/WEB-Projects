const Filho = ({altura, peso}) => {

    const imc = (altura, peso) => peso / (altura * altura)

    const imc_test = () => {
        const imc_value = imc(altura, peso)
        if (imc_value <= 18) return "Abaixo do peso"
        else if (imc_value > 25) return "Acima do peso"
        return "Peso ideal"
    }

    return (

        <>
            <h2>Altura e peso do pai: {altura}, {peso}kg</h2>
            <h3>IMC: {imc(altura, peso).toFixed(2)}</h3>
            <h3>Avaliação: {imc_test()}</h3>
        </>

    )

}

export default Filho