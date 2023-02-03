import React from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Benefits from './Components/Benefits.js';
import Service from './Components/Service.js';
import Butsev from './Components/Butsev.js';
import Stack from './Components/Stack.js';
import Talent from './Components/Talent.js';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar';





function App(){
  return (
    <div className = "App"> 
      <Navbar />
      <Hero />
      <Benefits />
      <Butsev />
      <Service />
      <Stack />
      <Talent />
      <Footer />
    </div>
    );
  }  
  
export default App;
