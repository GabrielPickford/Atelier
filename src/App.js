import React from 'react';
import {Navbar, Header, MenuItem, About, Footer, } from './components';
import './App.css';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Catalogue from './pages/Catalogue/Catalogue';
import Home from './pages/Home';

const App = () => (
  <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
      </Routes>

  </div>
);

export default App;