/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

const PokemonIsr = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemon ISR</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <>
            <Link href={`/mis-pokemons/isr/${pokemon.id}`} >
              <li><h2><a>{pokemon.name}</a></h2></li>
            </Link>
          </>
        ))}
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