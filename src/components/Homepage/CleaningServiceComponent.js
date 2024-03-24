import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

const CleaningServiceComponent = () => {
  return (
    <>
      <style type="text/css">
        {`
          @media (max-width: 768px) {
            .title-mobile-responsive {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <House size={50} className="mb-2 text-success" />
            <h1 className="fw-bold title-mobile-responsive" style={{ color: 'green' }}>
              Impresa di Pulizie Alessandro Fratti
            </h1>
            <p className="text-muted">A Sesto Fiorentino, Firenze</p>
          </Col>
        </Row>
      <p className="text-justify mt-4" style={{ fontWeight: '400' }}>
        Fratti Alessandro, a Sesto Fiorentino, in provincia di Firenze, è una ditta che opera nel settore delle pulizie civili e industriali. Il team effettua, con competenza e professionalità, pulizie di enti pubblici, pulizie post lavori edili, di supermercati e negozi, impianti sportivi, banche, appartamenti e uffici, ambulatori medici, teatri e cinema, condomini ed edifici civili in genere. Primo obiettivo, per noi, è sempre la salute e l’igiene. La ditta Fratti, inoltre, è specializzata in cristallizzazione pavimenti in marmo, ma svolge anche pulizie e trattamenti di pavimenti, in cotto e pietra. L’impresa Fratti effettua preventivi e sopralluoghi gratuiti e soddisfa ogni esigenza per la pulizia e l'igiene del tuo ambiente.
      </p>
      <p className="text-justify" style={{ fontWeight: '400' }}>
        Grazie all'esperienza acquisita negli anni, infatti, l'impresa di pulizie Fratti è in grado di soddisfare qualsiasi esigenza della clientela relativa all'igiene ed alla pulizia degli ambienti. Ce ne occupiamo quotidianamente offrendoti la competenza e la massima serietà di personale fidato e specializzato. Oltre ai servizi di pulizia di vario genere, eseguiamo anche interventi di sanificazione da virus, da batteri e da funghi, con un macchinario specifico che atomizza un concentrato apposito che serve per l'eliminazione di patogeni di vario genere.
      </p>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="success" size="lg">Richiedi un preventivo</Button>
      </div>
    </Container>
    </>
  );
};

export default CleaningServiceComponent;
