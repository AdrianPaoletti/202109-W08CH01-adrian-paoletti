import { useRouter } from "next/router"

const PokemonIsrId = ({ pokemon }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>LOADING</h2>
  }
  return (<>
    <h1>Pokemon ISR</h1>
    <h2>{pokemon.name}</h2>
  </>)
}
export const getStaticPaths = async () => {
  const response = await fetch("https://pakemon-paoletti.herokuapp.com/pokemon")
  const pokemonsApi = await response.json();
  const paths = pokemonsApi.map((pokemon) => ({ params: { id: `${pokemon.id}` } }))

  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch("https://pakemon-paoletti.herokuapp.com/pokemon/" + id)
  const popkemonsApi = await response.json();
  console.log(popkemonsApi)
  return {
    props: { pokemon: popkemonsApi, },
    revalidate: 20,
  }
}
export default PokemonIsrId