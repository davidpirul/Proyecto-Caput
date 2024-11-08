import { Container } from 'react-bootstrap'
import '../css/footer.css'

export default function Footer() {

  let rocasfooter = 'https://i.ibb.co/r6sxt6H/rocasfooter.png'
  let imagemap = 'https://i.ibb.co/wYcwMsv/650-1200.jpg'
  let instalogo =''
  let instatiktok =''
  let instayoutube =''
  
  return (
    <>
      <footer className='footer-back'>

        <Container>
          <div className='display-footer'>
            <div className='titulo-footer'>
              <h1>COLECTIVO CAPUT</h1>
              <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
              <img src={rocasfooter} alt='rocasfooter' />
            </div>
            <div className='list-footer'>
              <h7>EXPERIENCIAS</h7>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
            <div className='map-footer'>
              <h7>CONTACTO</h7>
              <p>hola@caputupac.com</p>
              <p>Direccion: Calle 43, Ciudad 3, Pais 5</p>
              <a href=""><img src={imagemap} alt="" /></a>

            </div>
            <div className='fundadores-list'>
              <h7>FUNDADORES</h7>
              <a href="">nombreapellido.com</a>
              <a href="">nombreapellido.com</a>
            </div>
          </div>
        </Container>

      </footer>
    </>
  );
}