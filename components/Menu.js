import Link from 'next/link'
import { useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="menu">
      <Link href="/" className="logo-link">
        <img src="/logo.svg" alt="Lilla Björn logo" className="logo" />
      </Link>

      <form action="/products" method="get" className="search">
        <input
          type="search"
          name="q"
          placeholder="Search"
          aria-label="Search"
        />
      </form>

      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/impressum">Impressum</Link></li>
      </ul>

     
    </nav>
  )
}
