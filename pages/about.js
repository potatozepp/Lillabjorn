import Head from 'next/head'
import Menu from '../components/Menu'
import FadeInSection from '../components/FadeInSection'

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <FadeInSection>
          <h1>About Us</h1>
          <p>
            We create handcrafted baby toys from sustainably sourced Swedish wood. Each toy is made with love and care.
          </p>
          <p>
            Have questions or special requests? Send us a message and we'll be
            happy to help you find the perfect toy for your little one.
          </p>
        </FadeInSection>
      </main>
    </div>
  )
}