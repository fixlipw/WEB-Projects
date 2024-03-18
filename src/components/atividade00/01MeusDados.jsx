import React from "react";
import "./estilos.css"

function MeusDadosV1() {

    return (
        <div>
            <h1>Felipe de Sousa</h1>
            <h1>Sistemas de Informação</h1>
            <h1>Universidade Federal do Ceará</h1>
        </div>
    )

}

const MeusDadosV2 = () => {

    return (
        <div>
            <h1>Felipe de Sousa</h1>
            <h1>Sistemas de Informação</h1>
            <h1>Universidade Federal do Ceará</h1>
        </div>
    )

}

class MeusDadosV3 extends React.Component {

    render() {
        return (
            <div>
                <h1>Felipe de Sousa</h1>
                <h1>Sistemas de Informação</h1>
                <h1>Universidade Federal do Ceará</h1>
            </div>
        )
    }

}

export {MeusDadosV1, MeusDadosV2, MeusDadosV3};