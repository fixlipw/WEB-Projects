import {useContext} from "react";
import {PokemonContext} from "./PokemonContext";

const PokemonDecrementar = () => {

    const {setId} = useContext(PokemonContext)

    return (
        <div>
            <button onClick={() => setId(i => i - 1)}>
                Decrementar
            </button>
        </div>
    )

}

export default PokemonDecrementar