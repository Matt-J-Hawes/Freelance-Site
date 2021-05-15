import React from 'react';
import './App.css';

//Components
import Header from './components/Header';
import LandingPage from './components/Homepage/LandingPage';
import About from './components/About/AboutMe'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
