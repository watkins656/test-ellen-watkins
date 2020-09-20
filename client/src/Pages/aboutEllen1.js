import React, { Component } from 'react';
import '../App.css';
import ellenFace from '../img/ellen-face.jpeg';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="App">
  <EllenNavbar />
      <div className="App-header">
        <img src={ellenFace} className="ellen-logo" alt="ellenFace" />
<i className='App-link'>Mission Statement</i>
        <p className='Booking-text'>

            Every face is different and skincare isn't one size fits all.  My philosophy is 'tailored skincare solutions.'  I help my clients set up homecare plans that work and provide luxury skin services and treatments to get everyone glowing like they've always wanted to.  I aim for meaningful relationships with my clients, and the goal for every experience is to make you feel pampered and cared for.
        </p>

      </div>
    </div>
  );
}

export default App;
