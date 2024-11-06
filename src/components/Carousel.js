import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const slides = [
    {
      image: '/pic1.png',
      title: 'MAKE.',
      description: 'We make end-to-end pipelines intelligent and accessible to contextualize the needs from creators and users in applications.'
    },
    {
      image: '/pic2.png',
      title: 'INNOVATE.',
      description: 'Bringing innovative design solutions to enhance user experience and optimize functionality.'
    },
    {
      image: '/pic3.png',
      title: 'INSPIRE.',
      description: 'Inspiring future generations through impactful research and innovative technology solutions.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('');
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollOffset(scrollPos * 0.5); // Adjust multiplier to control parallax depth
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? `carousel-slide-${index}-active` : ''} ${direction}`}
          style={{
          backgroundImage: `url(${slide.image})`,
          transform: `translateY(${scrollOffset}px)`, // Make sure this is applied
          }}
          >
                <div className="carousel-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
