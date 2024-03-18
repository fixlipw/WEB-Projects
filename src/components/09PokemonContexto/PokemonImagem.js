import {useContext} from "react";
import {PokemonContext} from "./PokemonContext";

import PokemonIncrementar from "./PokemonIncrementar";
import PokemonDecrementar from "./PokemonDecrementar";

const PokemonImagem = () => {

    const {id} = useContext(PokemonContext)
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    return (
        <div>
            <img src={url + id + ".png"} alt="Pokémon" width={150}/>
            <h2>Id: {id}</h2>
            <PokemonIncrementar />
            <PokemonDecrementar />
        </div>
    )

}

export default PokemonImagem