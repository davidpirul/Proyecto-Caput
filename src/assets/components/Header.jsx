import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Proyectos from '../../pages/Proyectos';
import Residencias from '../../pages/Residencias';
import CharlasTalleres from '../../pages/CharlasTalleres';
import Exploraciones from '../../pages/Exploraciones';
import Acciones from '../../pages/Acciones';
import Presentaciones from '../../pages/Presentaciones';

export default function Header() {

  const logo = '../src/assets/images/Recurso_3.png';
  const subtitulo = '../src/assets/images/Recurso_2.png';
  const logogiratorio1 = '../src/assets/images/Recurso_6.png';


  return (
    <>
      <div className='navcont'>
        <div>
          {[false,].map((expand) => (
            <Navbar key={expand} expand={expand} className='mb-3'>
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggleColor' />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton >
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className=" flex-grow-1 pe-3">
                      <Link to='/proyectos' element={<Proyectos />}>Proyectos</Link>
                      <Link to='/residencias' elemnt={<Residencias />}>Residencias</Link>
                      <Link to='charlasytalleres' element={<CharlasTalleres />}>Charlas y Talleres</Link>
                      <Link to='/exploraciones' element={<Exploraciones />}>Exploraciones</Link>
                      <Link to='/acciones' element={<Acciones />}>Acciones</Link>
                      <Link to='/presentaciones' element={<Presentaciones />}>Presentaciones</Link>
                    </Nav>
                  </Offcanvas.Body>

                </Navbar.Offcanvas>
              </Container>

            </Navbar>
          ))}
        </div>

        <img alt='imagengiratoria' src={logogiratorio1} className='logogiratorio_px'/>

        <Container>
          <Link to='/'>
            <img alt='caputlogo' src={logo} className='headerlogo_px' href='index.html' />
          </Link>
        </Container>
      </div>
      <div>
        <img alt='subtitulocaput' src={subtitulo} className='sublogo_px' />
      </div>

      <Container>
        <Link to='/'>
          <img alt='caputlogo' src={logo} className='headerlogo' href='index.html' />
        </Link>
      </Container>
    </>
  );
}