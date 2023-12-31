import React from 'react';

import './About.css';

const About = () => (
  <div className="about-container">
  <div className="about-handmade-jewelry">HANDMADE JEWELRY</div>
  <div className="about-green-container">
    <div className="div-4-about">
      <div className="about-left-column">
        <div className="about-left-info">
          <div className="about-left-title">Atelier gifts</div>
          <div className="left-text-about">
            Atelier holiday gifts have inspired love since 1837. Discover
            our most coveted designs for this season and beyond.
          </div>
        </div>
      </div>
      <div className="center-column-about">
        <div className="div-8-about">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6113eae8304f764dc9607ca62a0784b0e3f951bd1be2ae224855130234a0f1ef?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
            className="img-hand"
          />
          <div className="button-comprar-about">Comprar</div>
        </div>
      </div>
      <div className="right-column-about">
        <div className="div-10-about">
          <div className="div-11-about">
            Atelier holiday gifts have inspired love since 1837. Discover
            our most coveted designs for this season and beyond.
          </div>
          <div className="div-12-about">Ver catálogo</div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default About;
