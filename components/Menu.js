import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="menu">
      <Link href="/" className="logo-link">
        <img src="/logo.svg" alt="Lilla Björn logo" className="logo" />
      </Link>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/impressum">Impressum</Link></li>
      </ul>
      <form action="/products" method="get" className="search">
        <input
          type="search"
          name="q"
          placeholder="Search products"
          aria-label="Search products"
        />
      </form>
    </nav>
  )
}
