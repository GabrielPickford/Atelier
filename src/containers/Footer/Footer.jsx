import React from 'react';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer">
    <div className="app__footer__img-box">
      <img className='app__footer__img' src={images.footer} alt='Logo' />
    </div>
    <div className="app__footer__info-box">
      <div className="app__footer__title">CONTÁCTANOS</div>
      <div className="app__footer__subtitle">WhatsApp</div>
      <div className="app__footer__info">7123456</div>
      <div className="app__footer__subtitle">Instagram</div>
      <div className="app__footer__info">@atelier</div>
    </div>
  </div>
);

export default Footer;
