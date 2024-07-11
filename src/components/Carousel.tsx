
import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  {
    image: '/images/slide1.jpg',
    subtitle: 'Semente coração, por',
    title: 'Natalie Revorêdo',
    
  },
  {
    image: '/images/slide2.jpg',
    title: 'Natalie Revorêdo...',
    subtitle: 'emprega um método integrador em seu trabalho, considerando o corpo como uma manifestação plural do existir.',
    button: 'Conheça nossa história'
  },
  {
    image: '/images/slide3.jpg',
    title: 'Projetos...',
    subtitle: 'que visam o empoderamento feminino. como o "Circuito de Lives Corpo Mulher em Jornada" e o "Jornada Dançante ao Coração"',
    button: 'Confira mais sobre nosso trabalho'
  },
  {
    image: '/images/slide4.jpg',
    title: 'Eventos...',
    subtitle: 'que valoriza a arte como um veículo de expressão, cura e transformação, criando espaços seguros e inspiradores para que mulheres explorem sua potência criativa e identidade.',
    button: 'Inscreva-se'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">‹</button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-content">
              <p>{slide.subtitle}</p>
              <h1>{slide.title}</h1>
              <button className="carousel-btn">{slide.button}</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button next">›</button>
    </div>
  );
};

export default Carousel;
