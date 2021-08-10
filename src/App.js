import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import Skills from './components/SKills/Skills'
import './App.css';
// import { Container } from 'react-bootstrap'



function App() {
  return (
    <div>
        <Navbar />
        <LandingPage />
        <Skills />
    </div>
  );
}

export default App;
