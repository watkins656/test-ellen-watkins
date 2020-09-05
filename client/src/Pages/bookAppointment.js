import React, { Component } from 'react';
import '../App.css';
import logo from '../img/placeholder.PNG';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#fcd3db'   }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'center'}}>
          <Nav style={{flexGrow:1, flexBasis:0,justifyContent:'center'}}>
            {/* <Nav.Link href="services">Skin Services and Treatments</Nav.Link> */}
          </Nav>
          <Nav style={{flexDirection: 'column',flexGrow:1, flexBasis:0,justifyContent:'center'}}>
            <Navbar.Brand href="/"  style={{fontSize:'x-large'}}>Ellen Watkins Esthetics</Navbar.Brand>
            <NavDropdown title="Luxury Skin Services and Treatments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="services/#book">Book Appointment</NavDropdown.Item>
              <NavDropdown.Item href="services/#treatments">Services + Treatments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="services/#add-ons">About Ellen</NavDropdown.Item>
              <NavDropdown.Item href="booking">Contact</NavDropdown.Item>
              <NavDropdown.Item href="booking">FAQ</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav style={{flexGrow:1, flexBasis:0,justifyContent:'center'}}>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
