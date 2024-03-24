import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  {
    title: 'Pulizia uffici',
    description: 'Personale qualificato e attrezzature adatte a risolvere ogni tuo problema in ambito pulizie nei luoghi di lavoro.',
    imageUrl: 'PuliziaUfficio.jpg', // Sostituisci con il percorso reale dell'immagine
  },
  {
    title: 'Pulizie Post-cantiere',
    description: 'Affrontiamo con esperienza e professionalità lo sporco ostinato delle ristrutturazioni post cantiere.',
    imageUrl: 'PuliziaPostCantiere.jpg', // Sostituisci con il percorso reale dell'immagine
  },
  {
    title: 'Lavaggio vetrate',
    description: 'Specializzati in pulizia e lavaggio di vetri e vetrate anche in alta quota per appartamenti, condomini, negozi, uffici con apparecchiature moderne.',
    imageUrl: 'PuliziaVetrate.jpg', // Sostituisci con il percorso reale dell'immagine
  },
  {
    title: 'Lavaggio ad alta pressione',
    description: 'Pulizia di pavimenti esterni con idropulitrice: un sistema che si basa interamente sull’energia dell’acqua.',
    imageUrl: 'LavaggioAltaPressione.jpeg', // Aggiungi qui il percorso dell'immagine reale
  },
  {
    title: 'Sanificazione',
    description: 'Disinfezione da virus, batteri e funghi in ogni tipologia di ambiente per garantire la massima igiene anche in tempi difficili.',
    imageUrl: 'SanificazioneAmbiente.jpg', // Aggiungi qui il percorso dell'immagine reale
  },
  {
    title: 'Pulizia appartamenti',
    description: 'Pulizie civili di appartamenti e ville di piccole e grandi dimensioni garantendo professionalità e serietà.',
    imageUrl: 'PuliziaAppartamento.jpg', // Aggiungi qui il percorso dell'immagine reale
  }
];

const ServiceCard = ({ title, description, imageUrl }) => (
  <Card className="h-100 shadow-sm">
    <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

const ServiceList = () => {
  return (
    <Container fluid="lg" style={{ marginTop: '7rem' }}>        
      <Row className="justify-content-center my-5">
        <Col className="text-center">
          <h2 style={{ color: '#2A2A2A' }}>I nostri servizi per l'igiene</h2>
          <div style={{ 
              height: '5px', 
              width: '80px', 
              backgroundColor: '#50B948', 
              margin: '0.5rem auto 1rem', 
              borderRadius: '10px' 
            }} 
          />
        </Col>
      </Row>
      <Row className="g-4">
        {services.map((service, idx) => (
          <Col key={idx} lg={4} md={6} sm={12}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceList;
