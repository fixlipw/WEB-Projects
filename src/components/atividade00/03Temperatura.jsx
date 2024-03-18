
const Temperatura = () => {

    const celsiusTemperature = 41
    const fahrenheitTemperature = 85
    const kelvinTemperature = 305

    function celsiusParaFahrenheit(c) {
        return ((c * (9/5)) + 32).toFixed(2)
    }

    function fahrenheitParaCelsius(f) {
        return ((f - 32) * (5/9)).toFixed(2)
    }

    function kelvin(kelvin) {
        const celsius = kelvin - 273
        const fahrenheit = celsiusParaFahrenheit(celsius)
        return {kelvin, celsius, fahrenheit}
    }

    return (
        <div>
            <h1>Conversão de temperaturas</h1>
            <h2>Temperaturas para conversão: {celsiusTemperature}º celsius, {fahrenheitTemperature}º fahrenheit, {kelvinTemperature} kelvin</h2>
            <h3>Celsius para Fahrenheit: {celsiusParaFahrenheit(celsiusTemperature)}</h3>
            <h3>Fahrenheit para Celsius: {fahrenheitParaCelsius(fahrenheitTemperature)}</h3>
            <h3>Kelvin para Celsius e Fahrenheit: {JSON.stringify(kelvin(kelvinTemperature))}</h3>
        </div>
    )

}

export default Temperatura