import React from 'react';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header__div">
    <img src={images.header} className="app__header__img"/>
    <div className="app__header__words">
      <div className="app__header__title">Atelier gifts</div>
      <div className="app__header__motto">Good things are coming</div>
      <div className="app__header__button">Descubrir</div>
    </div>

  </div>
);

export default Header;

