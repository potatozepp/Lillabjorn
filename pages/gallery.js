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

  return { props: { images } }
}


export default function Gallery({ images }) {  return (
    <div>
      <Head>
        <title>Gallery - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <FadeInSection>
          <h1>Gallery</h1>
        </FadeInSection>
        <FadeInSection>
          <ImageGrid images={images} />
        </FadeInSection>
      </main>
    </div>
  )
}
