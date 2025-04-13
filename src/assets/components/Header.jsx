import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import '../css/header.css';

export default function Header() {

  const logo = 'https://i.ibb.co/p6V41zFh/caputblanco.png';

  return (
    <>
      <div className='navcont'>
        <div>
          {[false,].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton >
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className=" flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Creaciones</Nav.Link>
                      <Nav.Link href="#action2">Proyectos</Nav.Link>
                      <Nav.Link href="#action2">Residencias</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>

                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}



        </div>
      </div>
      <Container>
        <img alt='caputlogo' src={logo} className='headerlogo' />

        <header className='logocaput'>
          <a>Creaciones</a>
          <a>Proyectos</a>
          <a>Residencias</a>
        </header>
        <hr />
      </Container>
    </>
  );
}