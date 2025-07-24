
import React from 'react';
import { useState, useEffect } from 'react';

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[80vh] min-h-[500px] mt-16">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
        >
          {/* Slide content */}
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;