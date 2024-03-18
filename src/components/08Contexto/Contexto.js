import {Variavel} from "./VariavelContext"
import {useContext} from "react";

const CompA = () => {

    const varA = "Alguma coisa"

    return (
        <div>
            <Variavel.Provider value={varA}>
                <CompB />
                <CompC />
            </Variavel.Provider>
        </div>
    )
}

const CompB = () => {
    const varB = useContext(Variavel)
    return (
        <div>
            <h3>B: {varB}</h3>
        </div>
    )
}

const CompC = () => {
    return (
        <div>
            <CompD />
        </div>
    )
}

const CompD = () => {
    return (
        <div>
            <CompE />
        </div>
    )
}

const CompE = () => {
    const varE = useContext(Variavel)
    return (
        <div>
            <h3>E: {varE}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD, CompE}
