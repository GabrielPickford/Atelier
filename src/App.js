import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './pages/Catalogue/Catalogue';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogue' element={<Catalogue />} />
    </Routes>

  </div>
);

export default App;