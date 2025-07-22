import Head from 'next/head'
import Menu from '../components/Menu'
import FadeInSection from '../components/FadeInSection'

export default function Impressum() {
  return (
    <div>
      <Head>
        <title>Impressum - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
         <FadeInSection>
          <h1>Impressum</h1>
          <p>Lilla Björn AB</p>
          <p>Examplegatan 1, 123 45 Stockholm, Sweden</p>
          <p>Contact: contact@example.com</p>
          <p>VAT ID: SE1234567890</p>
        </FadeInSection>
      </main>
    </div>
  )
}
