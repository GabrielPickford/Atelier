import React from 'react';
import './Product.css';

const Product = ({ name }) => (
  <div className="app__product__div">
    <button className="app__product__button">{name}</button>
  </div>
);

export default Product;
