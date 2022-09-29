import React from 'react'
import "./ModelCard.scss"
import CarImage from '../.././../assets/ferrari.jpg';

function ModelCard({item}) {
  return (
    <section className="card">
      <figure>
        <img src={CarImage} alt="car" className="card__img" />
      </figure>

      <div className='card__info'>
        <p className="card__brand">Brand: {item.brand}</p>
        <p className="card__model">Model: {item.model}</p>
      </div>
    
    </section>
  );
}

export default ModelCard