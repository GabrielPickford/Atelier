import React from 'react';
import { images } from '../../constants';
import './About.css';

const About = () => (
  <div className="app__about">
    <div className="app__about__img-column">
      <img src={images.necklace} className="app__about__img" alt=''/>
    </div>
    <div className="app__about__info-column">
      <div className="app__about__title h__font">Atelier gifts</div>
      <div className="app__about__text p__font">
        Atelier holiday gifts have inspired love since 1837. Discover
        our most coveted designs for this season and beyond.
      </div>
      <div className="app__about__button">Ver catálogo</div>
    </div>
  </div>
);

export default About;
