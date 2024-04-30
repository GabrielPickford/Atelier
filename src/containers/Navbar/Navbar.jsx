import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div className="app__navbar__div">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/464fad22c5a6e4a92587af99f85707618d5c224cb135834441c55221ff6dff03?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
      className="app__navbar__img"
    />
    <div className="app__navbar__div-2">Atelier</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a0bbb2fab5116f0ab5e43f974f1ab4424964ab3e6276ef12e94e453da12975?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
      className="app__navbar__img-2"
    />
  </div>
);

export default Navbar;

