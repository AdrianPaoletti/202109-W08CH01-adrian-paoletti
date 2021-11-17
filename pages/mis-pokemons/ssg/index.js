const PokemonSSG = ({ pokemons }) => {
  return (
    <>
      <h1>POKEMON SSG</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (<li key={pokemon.id}><h2>{pokemon.name}</h2></li>))
        }
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://pakemon-paoletti.herokuapp.com/pokemon/`)
  const pokemonApi = await response.json();
  return { props: { pokemons: pokemonApi, }, }
}

export default PokemonSSG;