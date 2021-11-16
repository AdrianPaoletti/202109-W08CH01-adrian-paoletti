const PokeSsr = ({ pokemons }) => {
  return (
    <>
      <h1>POKEMON SSR</h1>
      <ul>
        {pokemons.map((pokemon) => (<li><h2>{pokemon.name}</h2></li>))}
      </ul>
    </>
  )
}

export const PokeSsr