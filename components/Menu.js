import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/impressum">Impressum</Link></li>
      </ul>
    </nav>
  )
}
