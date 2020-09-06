import React, { Component } from 'react';
import './App.css';
import logo from './img/ellen-logo.PNG';
import EllenNavbar from './Components/Navbar/Ellen-Navbar';

function App() {
  return (
    <div className="App">
<EllenNavbar />  
      <div className="App-header">
        <img src={logo} className="ellen-logo" alt="logo" />
        <div className="fall">
          Coming Fall 2020
        </div>
        <div className="luxury">
          luxury skin services + treatments
        </div>
        <a
          className="App-link"
          href="https://linktr.ee/estheticianellen"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkTree
        </a>
      </div>
    </div>
  );
}

export default App;
