import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1920px; // Imposta una larghezza massima se necessario
  height: 600px; // Aumenta l'altezza per una migliore visualizzazione
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover; // Mantiene l'immagine di copertura completa del contenitore
  background-position: top center; // Posiziona la parte superiore dell'immagine in alto al centro
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &.active {
    opacity: 1;
  }
  background-image: url(${props => props.src}); // Imposta l'immagine di sfondo tramite props
`;

const images = [
  "DALLE2.webp", // Aggiorna il percorso con immagini ad alta risoluzione
  "DALLE1.webp",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {images.map((img, index) => (
        <BackgroundImage
          key={img}
          src={img}
          alt={`Slide ${index + 1}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
