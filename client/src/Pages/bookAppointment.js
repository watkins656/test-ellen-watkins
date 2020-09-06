import React, { Component } from 'react';
import '../App.css';
import logo from '../img/placeholder.PNG';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="App">
      <EllenNavbar />
      <div className="App-header">
        <img src={logo} className="ellen-logo" alt="logo" />
        <a
          className="App-link"
          href="https://square.site/book/TSYFEFHW3V7VR/laser-no-razor-lee-s-summit-mo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Appointment Here
        </a>
        <p className='Booking-text'>
          I take appointments inside of Laser, No Razor, located in Lee's Summit.  When booking an appointment, you will be taken to the Laser, No Razor booking site.  For spa policies and procedures, please read below.
        </p>

      </div>
    </div>
  );
}

export default App;
