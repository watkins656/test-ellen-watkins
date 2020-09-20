import React, { Component } from 'react';
import '../App.css';
import logo from '../img/ellen-at-lazer.png';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="App">
      <EllenNavbar />
      <div className="book-appointment-header">
        <img src={logo} className="ellen-booking-logo" alt="logo" />
        <a
          className="App-link"
          href="https://square.site/book/TSYFEFHW3V7VR/laser-no-razor-lee-s-summit-mo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to book with me at Laser, No Razor!
        </a>
        <p className='Booking-text'>
          I take appointments inside of Laser, No Razor, located in Lee's Summit.  When booking an appointment, you will be taken to the Laser, No Razor booking site.  If you are not sure which facial to book, the Custom Facial is a great place to start.  If this is your first appointment with me, please arrive 10-15 minutes prior to your appointment.  I'll see you soon!
        </p>

      </div>
    </div>
  );
}

export default App;
