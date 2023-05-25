import React from 'react';

function Card({ product }) {
  return (
    <div className="gigCard">
     <div className="info">
      <h2>{product.title}</h2>
      <p>{product.teaser}</p>
      <img src={product.image.fullpath} alt={product.title} />
    </div>
    </div>
  );
}

export default Card;
