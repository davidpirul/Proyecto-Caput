import { Container } from 'react-bootstrap';
import '../css/presentacion.css';

export default function Presentacion() {
  let caputIdeas = 'https://i.ibb.co/42JNTyD/colectivocaput-hotglue.jpg';
  let divisionCaput = 'https://i.ibb.co/P5GpBv4/separador.png';
  let perfilExample = 'https://i.ibb.co/D7xmZj3/profileback.png'
  return (
    <>
      <Container>
        <div>
          <h1>
            Lorem ipsum dolor sit amet.
          </h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h6>
        </div>
        <img src={caputIdeas} alt='caput-ideas' className='img-ideas' />
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
        <Container>
          <div>
            <div>
              <img src={divisionCaput} alt='division-caput' className='div-presentacion' />
            </div>
            <div className='div-perfiles'>
              <div className='perfil'>
                <img src={perfilExample} className='photo-perfil' alt='photo-perfil' />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos sapiente? Ullam, placeat amet!</p>
              </div>
              <div className='perfil'>
                <img src={perfilExample} className='photo-perfil' alt='photo-perfil' />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos sapiente? Ullam, placeat amet!</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  )

}