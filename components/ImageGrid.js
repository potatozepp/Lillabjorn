import Image from 'next/image'

export default function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, idx) => (
        <div key={idx} className="grid-item">
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
  )
}
