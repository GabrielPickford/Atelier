import React from 'react';
import './MenuItem.css';
import Product from '../../components/Product/Product';
import {data} from '../../constants';

const MenuItem = () => (
  <div>
    <div className="app__menuitem__title h__font">NUEVO EN ATELIER</div>
    <div className="app__menuitem__card">
      <div className="app__menuitem__card-container">
            {data.ring.map((ring) => <Product ring={ring} key={ring.title} />)}
      </div>
    </div>
  </div>
);

export default MenuItem;
 