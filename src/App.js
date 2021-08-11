import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import Skills from './components/SKills/Skills'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import './App.css';
// import { Container } from 'react-bootstrap'
import { useState } from 'react';

function App() {
  const [positionY, setPositonY] = useState(0);
  const moveMoon =  () => {
    if(window.scrollY <= 600 && window.scrollY >=0)
        setPositonY(window.scrollY) 
    // console.log(positionY);
    };

    window.addEventListener('scroll',moveMoon);
  return (
    <div>
        <Navbar positionY={positionY}/>
        <LandingPage positionY={positionY}/>
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
