import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Skills from './Componentes/Skills/Skills';
import Portfolio from './Componentes/Portfolio/Portfolio';
import Contact from './Componentes/Contact/Contact';

function App() {
  return(
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;
