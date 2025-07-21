import Head from 'next/head'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <h1>Welcome to Lilla Björn</h1>
        <p>Handcrafted Swedish wooden baby toys.</p>
        <p>
          Our toys are lovingly made to inspire creativity and joy. Each piece
          is carved from local wood and finished with natural oils.
        </p>

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

        <section>
          <h2>Gallery Preview</h2>
          <div className="cards">
            <img src="/sample1.svg" alt="Sample toy 1" className="card" />
            <img src="/sample2.svg" alt="Sample toy 2" className="card" />
            <img src="/sample3.svg" alt="Sample toy 3" className="card" />
          </div>
        </section>
      </main>
    </div>
  )
}
