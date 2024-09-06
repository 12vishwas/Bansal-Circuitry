import React from 'react';
import Slider from 'react-slick';
import Slide from '../components/Slide';

const Home : React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables auto-scrolling
    autoplaySpeed: 3000, // Time in milliseconds between slides
  };

  const slides = [
    {
      image: 'image/slide1.jpg',
      title: '',
      description: ''
    },
    {
      image: 'image/slide2.jpg',
      title: '',
      description: ''
    },
    {
      image: 'image/slide3.jpg',
      title: '',
      description: ''
    }
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
