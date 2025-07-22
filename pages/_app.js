import '../styles/globals.css'
import BasketIcon from '../components/BasketIcon'
import { BasketProvider } from '../components/BasketContext'

export default function App({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
      <BasketIcon />
    </BasketProvider>
  )
}
