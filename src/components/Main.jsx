import { useState, useEffect } from 'react';

const Main = () => {

    const [ pokemonInfo, setPokemonInfo ] = useState({});


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then((res) => res.json())
            .then((data) => {
                setPokemonInfo(data)
                console.log(data);
            })
    }, [])


    function showPokemonInfo () {
        return (
            <div>
                <h3>{pokemonInfo.name}</h3>
                <p></p>
            </div>
        )
    }
    return showPokemonInfo();
}


export default Main;