// Imprimir o nome do curso e pelo menos 3 disciplinas

import Disciplina from "./Disciplina";

const Curso = () => {

    return (
        <div>
            <h1>Sistemas de Informação</h1>
            <hr/>
            <Disciplina nome={"Matemática Básica"} codigo={"QXD0056"} creditos={4} periodo={"Manhã"}/>
            <hr/>
            <Disciplina nome={"Pré-Cálculo"} codigo={"QXD0109"} creditos={2} periodo={"Tarde"}/>
            <hr/>
            <Disciplina nome={"Matemática Discreta"} codigo={"QXD0008"} creditos={4} periodo={"Manhã"}/>
            <hr/>
        </div>
    )

}

export default Curso