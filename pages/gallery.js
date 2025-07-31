import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import sizeOf from 'image-size'
import Menu from '../components/Menu'
import ImageGrid from '../components/ImageGrid'
import FadeInSection from '../components/FadeInSection'

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery')
  const files = fs.readdirSync(galleryDir)

  const images = files
    .filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .map(filename => {

      const filepath = path.join(galleryDir, filename)
      const buffer = fs.readFileSync(filepath)
      const dimensions = sizeOf(buffer)

      return {
        src: `/gallery/${filename}`,
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
