import '../styles/globals.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a> --- Home -- </a>
        </Link>
        <Link href="/pokemon">
          <a>  Pokemon -- </a>
        </Link>
        <Link href="/mis-pokemon/isr">
          <a>  Pokemon ISR -- </a>
        </Link>
        <Link href="/mis-pokemon/ssg">
          <a>  Pokemon SSG -- </a>
        </Link>
        <Link href="/mis-pokemon/ssr">
          <a>  Pokemon SSR --- </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
