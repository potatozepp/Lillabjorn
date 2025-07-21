export default function ImageGrid({ images }) {
  return (
    <div className="cards">
      {images.map((img, idx) => (
        <img key={idx} src={img.src} alt={img.alt} className="card" />
      ))}
    </div>
  )
}
