import '../styles/globals.css'
import BasketIcon from '../components/BasketIcon'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BasketIcon />
    </>
  )
}
