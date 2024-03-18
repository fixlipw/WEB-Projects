import PokemonImagem from "./PokemonImagem";
import {PokemonContext} from "./PokemonContext";
import {useState} from "react";

const PokemonPrincipal = () => {

    const [id, setId] = useState(255)

    return (
        <div>
            <h2>Pokémon</h2>
            <PokemonContext.Provider value={{id: id, setId: setId}}>
                <PokemonImagem />
            </PokemonContext.Provider>
        </div>
    )

}

export default PokemonPrincipal