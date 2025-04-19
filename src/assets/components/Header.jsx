import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import '../css/header.css';

export default function Header() {

  const logo = 'https://i.ibb.co/p6V41zFh/caputblanco.png';

  return (
    <>
      <div className='navcont'>
        <div>
          {[false,].map((expand) => (
            <Navbar key={expand} expand={expand} className='mb-3'>
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggleColor'/>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton >
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className=" flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Proyectos</Nav.Link>
                      <Nav.Link href="#action2">Residencias</Nav.Link>
                      <Nav.Link href="#action2">Charlas y Talleres</Nav.Link>
                      <Nav.Link href="#action3">Exploraciones</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>

                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}



        </div>
      </div>
      <Container>
        <img alt='caputlogo' src={logo} className='headerlogo' href='index.html' />

        <header className='logocaput'>
          <a>Proyectos</a>
          <a>Residencias</a>
          <a>Charlas y Talleres</a>
          <a>Exploraciones</a>
        </header>
        <hr />
      </Container>
    </>
  );
}