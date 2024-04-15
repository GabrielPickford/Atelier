import React from 'react';

import './Header.css';

const Header = () => (
  <div className="app__header__div">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d880c688918afa589b89e9a83f3820224c7fb68e34ec452fd0ed1c8448b7b875?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
      className="app__header__img"
    />
    <div className="app__header__div-2">Atelier gifts</div>
    <div className="app__header__div-3">Good things are coming</div>
    <div className="app__header__div-4">Descubrir</div>
  </div>
);

export default Header;

