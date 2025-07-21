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
          <img src="/sample1.svg" alt="Sample toy 1" className="card" />
          <img src="/sample2.svg" alt="Sample toy 2" className="card" />
          <img src="/sample3.svg" alt="Sample toy 3" className="card" />
        </div>
      </main>
    </div>
  )
}
