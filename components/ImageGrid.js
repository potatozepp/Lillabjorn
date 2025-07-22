import Image from 'next/image'
import { useState } from 'react'

export default function ImageGrid({ images }) {
  const [active, setActive] = useState(null)

  const showPrev = e => {
    e.stopPropagation()
    setActive(i => (i - 1 + images.length) % images.length)
  }
  const showNext = e => {
    e.stopPropagation()
    setActive(i => (i + 1) % images.length)
  }

  return (
    <>
      <div className="image-grid">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="grid-item"
            onClick={() => setActive(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ borderRadius: 'var(--corner-radius)' }}
            />
          </div>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="prev" onClick={showPrev} aria-label="Previous">
            ‹
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].width * 2}
              height={images[active].height * 2}
            />
          </div>
          <button className="next" onClick={showNext} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </>
  )
}
