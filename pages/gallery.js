import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Menu from '../components/Menu'
import ImageGrid from '../components/ImageGrid'
import FadeInSection from '../components/FadeInSection'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public/gallery')
  const files = fs.readdirSync(dir)
  const images = files
    .filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .map(name => ({ src: `/gallery/${name}`, alt: name }))
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
