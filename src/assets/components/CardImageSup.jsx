import '../css/cardimagesup.css'

export default function CardImageSup({ linkImagenCaput, altImageCaput }) {

  return (
    <section>
      <img className='sup-image-layout' src={linkImagenCaput} alt={altImageCaput} />
    </section>
  )
}