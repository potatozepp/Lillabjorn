import Head from 'next/head'
import Menu from '../components/Menu'
import FadeInSection from '../components/FadeInSection'

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <FadeInSection>
          <h1>Checkout</h1>
          <p>This is a demo checkout page.</p>
        </FadeInSection>
      </main>
    </div>
  )
}