import Head from 'next/head'
import Menu from '../components/Menu'

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <h1>Gallery</h1>
        <div className="cards">
          <img src="/1000020778.jpg" alt="friends 1" className="card" />
          <img src="/1000020779.jpg" alt="friends 2" className="card" />
          <img src="/1000020780.jpg" alt="friends 3" className="card" />
        </div>
      </main>
    </div>
  )
}
