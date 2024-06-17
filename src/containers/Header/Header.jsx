import React from 'react';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header" id='home'>
    <img className="app__header__img" src={images.header3} alt='.'/>
    <div className="app__header__info">
      <div className="app__header__title h__font">Atelier gifts</div>
      <div className="app__header__motto p__font">Good things are coming</div>
      <div className="app__header__button">Descubrir</div>
    </div>
  </div>
);

export default Header;

