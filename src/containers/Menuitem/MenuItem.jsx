import React from 'react';
import './MenuItem.css';
import Product from '../../components/Product/Product';
import { data, images } from '../../constants';

const MenuItem = () => (
  <div>
    <div className="app__menuitem__div">NUEVO EN ATELIER</div>
    <div className="app__menuitem__card">
      <div className="app__menuitem__images-container">
        {[images.ring1, images.ring2, images.ring3].map((image, index) => (
          <div className="app__menuitem__images-card" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery_image" /> 
            {data.ring.map((ring, index) => (
              <Product key={ring.name + index + 1} name={ring.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="app__menuitem__card">
      <div className="app__menuitem__images-container">
        {[images.ring4, images.ring5, images.ring6].map((image, index) => (
          <div className="app__menuitem__images-card" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery_image" />
            <Product name={"s"} />
          </div>
        ))}
      </div>
    </div>
    <div className="app__menuitem__card">
      <div className="app__menuitem__card-row">
        <div className="app__menuitem__images-container">
        </div>
      </div>
    </div>
  </div>
);

export default MenuItem;
