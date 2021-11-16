import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
      const pokemonsResponse = await response.json();
      setPokemons(pokemonsResponse.results)
    })()
  }, [])

  return (
    <>
      <h1>POKEMON API</h1>
      {pokemons &&
        pokemons.map((pokemon) => (<h2>{pokemon.name}</h2>))
      }
    </>
  )
}

export default Pokemon;