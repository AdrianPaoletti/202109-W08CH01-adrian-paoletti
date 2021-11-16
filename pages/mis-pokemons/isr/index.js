const PokemonIsr = ({ pokemons }) => {
  return (
    <>
      <h1>PokemonISR</h1>
      <ul>
        {pokemons.map((pokemon) => (<li><h2>{pokemon.name}</h2></li>))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://pakemon-paoletti.herokuapp.com/pokemon/`);
  const pokemon = await response.json();
  return {
    props: {
      pokemons: pokemon,
    },
  };
}

export default PokemonIsr