import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { TelephoneFill } from 'react-bootstrap-icons';

// Hook personalizzato per rilevare la larghezza della finestra
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const windowWidth = useWindowWidth(); // Utilizza l'hook per ottenere la larghezza della finestra

  // Solo per dispositivi con una larghezza maggiore di 992px
  const isDesktop = windowWidth >= 992;

  return (
    <>
      <style type="text/css">
        {`
          .navbar-brand img {
            height: 90px;
            width: 90px;
          }

          @media (min-width: 992px) {
            .navbar-brand img {
              height: 110px;
              width: 110px;
            }

            .pc-menu-item {
              margin-right: 30px;
            }

            .pc-menu-item:last-child {
              margin-right: 0;
            }

            .pc-menu-item:hover {
              border-bottom: 2px solid green;
              padding-bottom: 2px;
            }
          }
        `}
      </style>

      <Navbar expanded={expanded} expand="lg" bg="light" variant="light" fixed="top" style={{ overflow: 'visible' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="Logoazienda.png" className="d-inline-block align-top" alt="Logo azienda" />
          </Navbar.Brand>
          <Button 
            variant="success" 
            className={`d-lg-none ${expanded ? 'd-none' : ''}`} 
            style={{ position: 'absolute', left: '52%', transform: 'translateX(-50%)', zIndex: 999 }}
          >
            <TelephoneFill /> Chiama ora
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="pc-menu-item" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#chi-siamo" className="pc-menu-item" onClick={() => setExpanded(false)}>Chi siamo</Nav.Link>
              <Nav.Link href="#sanificazione" className="pc-menu-item" onClick={() => setExpanded(false)}>Sanificazione</Nav.Link>
              <NavDropdown
                title="Servizi"
                id="basic-nav-dropdown"
                className="pc-menu-item"
                show={isDesktop ? showDropdown : undefined} // Applica la logica del dropdown al passaggio del mouse solo su desktop
                onMouseEnter={isDesktop ? () => setShowDropdown(true) : undefined}
                onMouseLeave={isDesktop ? () => setShowDropdown(false) : undefined}
                onClick={isDesktop ? undefined : () => setShowDropdown(!showDropdown)} // Su dispositivi mobili, il dropdown si attiva/disattiva al clic
              >
                <NavDropdown.Item href="#servizio-1">Servizio 1</NavDropdown.Item>
                <NavDropdown.Item href="#servizio-2">Servizio 2</NavDropdown.Item>
                <NavDropdown.Item href="#servizio-3">Servizio 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contatti" className="pc-menu-item" onClick={() => setExpanded(false)}>Contatti</Nav.Link>
            </Nav>
            <Button variant="success" className="d-none d-lg-block" onClick={() => setExpanded(false)}>
              <TelephoneFill /> Chiama ora
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
