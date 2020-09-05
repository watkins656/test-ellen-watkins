import React, { Component } from 'react';
import './App.css';
import logo from './img/ellen-logo.PNG';
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
              <NavDropdown.Item href="book-appointment">Book Appointment</NavDropdown.Item>
              <NavDropdown.Item href="services">Services + Treatments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about-ellen">About Ellen</NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav style={{flexGrow:1, flexBasis:0,justifyContent:'center'}}>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
