import React from 'react';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

const Slide = ({image,title,description}: SlideProps) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '100%', height: '50%'}} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Slide;

