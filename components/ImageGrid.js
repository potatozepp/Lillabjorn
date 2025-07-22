import Image from 'next/image'

export default function ImageGrid({ images }) {
  return (
      <div className="cards">
      {images.map((image, idx) => (
        <div key={idx} className="card">
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            sizes="(max-width: 600px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}