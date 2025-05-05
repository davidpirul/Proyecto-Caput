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

  const logo = 'https://i.ibb.co/p6V41zFh/caputblanco.png';


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
                      <Nav.Link href='/proyectos' >Proyectos</Nav.Link>
                      <Nav.Link href='/residencias'>Residencias</Nav.Link>
                      <Nav.Link href='/charlasytalleres'>Charlas y Talleres</Nav.Link>
                      <Nav.Link href='/exploraciones'>Exploraciones</Nav.Link>
                      <Nav.Link href='/acciones'>Acciones</Nav.Link>
                      <Nav.Link href='/Presentaciones'>Presentaciones</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>

                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}



        </div>
      </div>
      <Container>
        <Link to='/'>
        <img alt='caputlogo' src={logo} className='headerlogo' href='index.html' />
        </Link>
    
        <header className='logocaput'>
          <Link to='/proyectos' element={<Proyectos /> }>Proyectos</Link>|
          <Link to='/residencias' elemnt={<Residencias />}>Residencias</Link>|
          <Link to='charlasytalleres' element={<CharlasTalleres />}>Charlas y Talleres</Link>|
          <Link to='/exploraciones' element={<Exploraciones />}>Exploraciones</Link>|
          <Link to='/acciones' element={<Acciones />}>Acciones</Link>|
          <Link to='/presentaciones' element={<Presentaciones />}>Presentaciones</Link>
        </header>
        <hr />
      </Container>
    </>
  );
}