import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,Container, NavbarBrand, Carousel, Accordion, Card, Button } from 'react-bootstrap'
import ellenFace from '../img/ellenface.jpg';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="services-treatments-page">
  <EllenNavbar />  
      {/* <div id="menu-images">
        <div className="text-center">Click to Enlarge</div>
      </div> */}
   
      <div id="menu-item-descriptions-wrapper">
      <img src={ellenFace} className="ellen-logo" alt="ellenFace" />
        <div id="menu-item-descriptions-title">
          Mission Statement
          </div>
          <p className='Booking-text'>

Every face is different and skincare isn't one size fits all.  My philosophy is 'tailored skincare solutions.'  I help my clients set up homecare plans that work and provide luxury skin services and treatments to get everyone glowing like they've always wanted to.  I aim for meaningful relationships with my clients, and the goal for every experience is to make you feel pampered and cared for.
</p>


    </div>

      <div className="footer-pink">
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand style={{margin:"auto"}}><a href="https://square.site/book/TSYFEFHW3V7VR/laser-no-razor-lee-s-summit-mo">Book Now!</a></NavbarBrand>
          </Container>
        </Navbar>
      </div>
    </div >





  );
}

export default App;
