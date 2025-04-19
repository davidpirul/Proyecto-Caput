import { Container } from 'react-bootstrap';
import '../css/presentacion.css';

export default function Presentacion() {

  const perfilLoreto = 'https://i.ibb.co/TxVNxTwG/imagen2-centrada-400x400.jpg';
  const perfilCamilo = 'https://i.ibb.co/TDcnQdmR/imagen1-centrada-400x400.jpg';
  const imagenDeFondo = 'https://i.ibb.co/DPxfLYXx/Recurso-22.png';


  return (
    <>
      <div className='armado-texto'>
        <div className='tit-presentacion'>
          <h1>CAPUT TUPAC</h1>
          <h6>destruir x construir</h6>
        </div>
        <div className='texto-presentacion'>
          <p>
            Somos un colectivo de artistas-investigadores, que buscamos poner en movimiento el arte y la cultura desde procesos transdisciplinares y contemporáneos, con una pedagogía experimental y una metodología colaborativa. Proponiendo cruces críticos en un ambiente horizontal, comunitario, educativo y político.
          </p>
          <p>
            Como colectivo, a través de la consigna destruir x construir, convocamos a acciones a partir de un pensamiento divergente y rupturista, haciendo lenguajes simbólicos y concretos para la organización de nuevos mundos.
          </p>
          <p>
            Trabajamos tramas border, cruzando cotidianidades de cada lugar con exploraciones sobre problemáticas, geografías, deseos y/o habilidades de cada comunidad. Esto nos acerca a una práctica real, desestabilizando patrones y conductas enfocadas en los estereotipos y prejuicios, para luego ser realzadas como un gesto deconstructivo, mediante la concepción de un/a activismo-agitación, o como configuración (micro)política de una gestión, una obra o una acción.
          </p>
        </div>
      </div>
      <img src={imagenDeFondo} className='img-rot-fondo' alt='recurso de fondo' />
      <Container fluid='false'>
        <div className='cont-perfiles'>
          <div className='div-perfiles'>
            <div className='perfil'>
              <img src={perfilLoreto} className='photo-perfil' alt='photo-perfil-Loreto' />
              <div className='txt-profiles'>
                <h5>Loreto Caput</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos sapiente? Ullam, placeat amet!</p>
              </div>
            </div>
            <div className='perfil'>
              <img src={perfilCamilo} className='photo-perfil' alt='photo-perfil-Camilo' />
              <div className='txt-profiles'>
                <h5>Camilo Caput</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos sapiente? Ullam, placeat amet!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )

}