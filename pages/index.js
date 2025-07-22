import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Menu from '../components/Menu'
import ImageGrid from '../components/ImageGrid'
import FadeInSection from '../components/FadeInSection'

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery')
  const files = fs.readdirSync(galleryDir)
  const images = files
    .filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .map(filename => {
      let dimensions = { width: 500, height: 700 }

      return {
        src: `/gallery/${filename}`, // URL path for browser
        alt: filename,
        width: dimensions.width,
        height: dimensions.height,
      }
    })
    .slice(0, 11)

  return { props: { images } }
}


export default function Home({ images }) {
  return (
    <div>
      <Head>
        <title>Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <FadeInSection>
          <h1>Welcome to Lilla Björn</h1>
          <p>Handcrafted Swedish wooden baby toys.</p>
          <p>
            Our toys are lovingly made to inspire creativity and joy. Each piece
            is carved from local wood and finished with natural oils.
          </p>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2>Customer Reviews</h2>
            <div className="cards">
              <div className="card">
                <p>"These toys are amazing! My baby loves them."</p>
                <p>- Anna</p>
              </div>
              <div className="card">
                <p>"Beautiful craftsmanship and safe for little hands."</p>
                <p>- Erik</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2>Gallery Preview</h2>
            <ImageGrid images={images} />
          </section>
        </FadeInSection>
      </main>
    </div>
  )
}