import Link from 'next/link'
import { useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="nav-wrapper">
      <nav className="menu">
        <Link href="/" className="logo-link">
          <img src="/logo.svg" alt="Lilla Björn logo" className="logo" />
        </Link>

        <form action="/products" method="get" className="search">
          <input
            type="search"
            name="q"
            placeholder="Search products"
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

      <svg className="nav-wave" viewBox="0 0 1440 50" preserveAspectRatio="none">
        <path d="M0,25 
         C135,45 270,5 405,25 
         C540,45 675,5 810,25 
         C945,45 1080,5 1215,25 
         C1350,45 1485,5 1620,25 
         L1620,50 L0,50 Z" />
      </svg>

    </div>
  )
}
