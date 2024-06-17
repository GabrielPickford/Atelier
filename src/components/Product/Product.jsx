import React from 'react';
import './Product.css';

const Product = ({ ring: { imgUrl, name }}) => (
  <div className="app__product__card">
    <img className="app__product__img" src={imgUrl} alt="awards" />
    <button className="app__product__button">{name}</button>
  </div>
);

export default Product;
