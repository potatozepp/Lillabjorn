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
            Hi! We’re Sebastian and Laura – the people behind this small, heartfelt business. Together, we design and handcraft wooden toys for babies and toddlers that are safe, natural, and made to be truly loved.
          </p>
          <p>
            Our journey started with the simple idea that toys don’t need to blink or beep to be magical. What matters most is quality, care, and imagination. That’s why every one of our toys is made by hand, using child-friendly materials and soft, rounded shapes – perfect for tiny hands and curious minds.
          </p>
          <p>
            We work from our small workshop, turning ideas into lasting pieces that are as beautiful as they are playful. Whether you’re a parent, grandparent, or simply someone who loves thoughtful gifts, we’re happy you’re here.
          </p>
          <p>Thank you for supporting our little dream.</p>
          <p className="signature">— Sebastian & Laura</p>
          <p>
            Have questions or special requests? Send us a message and we'll be happy to help you find the perfect toy for your little one.
          </p>
        </FadeInSection>
      </main>
    </div>
  )
}