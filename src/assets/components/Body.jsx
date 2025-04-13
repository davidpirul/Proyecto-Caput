import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CardImageSup from './CardImageSup';
import Presentacion from './Presentacion'
import '../css/cardimagesup.css';

export default function Body() {

  const images = [
    { link: 'https://i.ibb.co/5jt3dbj/Recurso-18.png', alt: 'recurso18' },
    { link: 'https://i.ibb.co/TKqcPD7/Recurso-17.png', alt: 'recurso17' },
    { link: 'https://i.ibb.co/X2pr44t/Recurso-16.png', alt: 'recurso16' },
    { link: 'https://i.ibb.co/5jHNyr7/Recurso-15.png', alt: 'recurso15' },
    { link: 'https://i.ibb.co/V9RXc9J/Recurso-14.png', alt: 'recurso14' },
  ];

  return (
    <>
      <Container fluid='false' className="sup-image-carousel">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                src={image.link}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container>
        <hr />
      </Container>
      <Presentacion />
    </>
  );
}