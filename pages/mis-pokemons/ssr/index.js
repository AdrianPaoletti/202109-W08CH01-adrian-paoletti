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

export const getServerSideProps = async () => {
  const response = await fetch("https://pakemon-paoletti.herokuapp.com/pokemon")
  const pokemonsApi = await response.json();
  return { props: { pokemons: pokemonsApi, }, }
}

export default PokeSsr