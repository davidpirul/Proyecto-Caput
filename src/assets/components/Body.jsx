import { Container } from 'react-bootstrap';
import CardImageSup from './CardImageSup';
import Presentacion from './Presentacion'
import '../css/cardimagesup.css';

export default function Body() {
  return (
    <>
      <Container  className='sup-image-grid'>
        <CardImageSup
          linkImagenCaput='https://i.ibb.co/5jt3dbj/Recurso-18.png'
          altImageCaput='recurso18'
        />
        <CardImageSup
          linkImagenCaput='https://i.ibb.co/TKqcPD7/Recurso-17.png'
          altImageCaput='recurso17'
        />
        <CardImageSup
          linkImagenCaput='https://i.ibb.co/X2pr44t/Recurso-16.png'
          altImageCaput='recurso16'
        />
        <CardImageSup
          linkImagenCaput='https://i.ibb.co/5jHNyr7/Recurso-15.png'
          altImageCaput='recurso15'
        />
        <CardImageSup
          linkImagenCaput='https://i.ibb.co/V9RXc9J/Recurso-14.png'
          altImageCaput='recurso14'
        />
        <CardImageSup />
        <CardImageSup />
        <CardImageSup />
      </Container>
     <hr />
     <Presentacion />
    </>
  );
}