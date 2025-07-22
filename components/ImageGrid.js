import Image from 'next/image'

export default function ImageGrid({ images }) {
  return (
    <div className="cards">
      {images.map((img, idx) => (
        <div key={idx} className="card">
          <Image src={img.src} alt={img.alt} width={300} height={200} layout="responsive" />
        </div>
      ))}
    </div>
  )
}