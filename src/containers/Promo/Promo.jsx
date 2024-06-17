import React from 'react';
import { images } from '../../constants';
import './Promo.css';

const Promo = () => (
  <div className="app__promo">
    <div className="app__promo__title h__font">HANDMADE JEWELRY</div>
    <div className="app__promo__content">
      <div className="app__promo__column ">
        <div className="app__promo__subtitle h__font">Atelier gifts</div>
        <div className="app__promo__text p__font">
          Atelier holiday gifts have inspired love since 1837. Discover
          our most coveted designs for this season and beyond.
        </div>
      </div>
      <div className="app__promo__img-box">
        <img className='app__promo__img' src={images.hand} alt='hand' />
      </div>
      <div className="app__promo__column">
        <div className="app__promo__text p__font">
          Atelier holiday gifts have inspired love since 1837. Discover
          our most coveted designs for this season and beyond.
        </div>
        <div className="app__promo__catalog-button">Ver catálogo</div>
      </div>
    </div>
  </div>
);

export default Promo;

