import Head from 'next/head'
import Menu from '../components/Menu'
import ImageGrid from '../components/ImageGrid'

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <h1>Gallery</h1>
        <ImageGrid
          images={[
            { src: '/1000020784.jpg', alt: 'friends 1' },
            { src: '/1000020779.jpg', alt: 'friends 2' },
            { src: '/1000020780.jpg', alt: 'friends 3' },
            { src: '/1000020781.jpg', alt: 'friends 1' },
            { src: '/1000020782.jpg', alt: 'friends 2' },
            { src: '/1000020783.jpg', alt: 'friends 3' },
          ]}
        />
      </main>
    </div>
  )
}
