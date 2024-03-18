import {useContext} from "react";
import {PokemonContext} from "./PokemonContext";

const PokemonIncrementar = () => {

    const {setId} = useContext(PokemonContext)

    return (
        <div>
            <button onClick={() => setId(i => i + 1 )}>
                Incrementar
            </button>
        </div>
    )

}

export default PokemonIncrementar