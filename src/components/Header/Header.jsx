import React from 'react';

import './Header.css';

const Header = () => (
  <div className="container-header">
  <div className="borde-header">
    <div className="div-img">
      <div className="column-img">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e71aba78cc39dbbbe44f0e82766067759916ebd78eb8f5920b0f6e193dc0ff6?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
          className="model-girl"
        />
      </div>
      <div className="column-text">
        <div className="gift-text">
          <div className="atelier-gifts">Atelier gifts</div>
          <div className="holiday-text">
            Atelier holiday gifts have inspired love since 1837. Discover
            our most coveted designs for this season and beyond.
          </div>
          <div className="ver-catalogo">Ver catálogo</div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Header;
