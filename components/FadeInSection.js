import { useEffect, useRef, useState } from 'react'

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })
    if (domRef.current) {
      observer.observe(domRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-in-section${isVisible ? ' is-visible' : ''}`}
    >
      {children}
    </div>
  )
}
