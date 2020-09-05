import React, { Component } from 'react';
import '../App.css';
import logo from '../img/placeholder.PNG';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#fcd3db' }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'center' }}>
          <Nav style={{ flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
            {/* <Nav.Link href="services">Skin Services and Treatments</Nav.Link> */}
          </Nav>
          <Nav style={{ flexDirection: 'column', flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
            <Navbar.Brand href="/" style={{ fontSize: 'x-large' }}>Ellen Watkins Esthetics</Navbar.Brand>
            <NavDropdown title="Luxury Skin Services and Treatments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="services/#book">Book Appointment</NavDropdown.Item>
              <NavDropdown.Item href="services/#treatments">Services + Treatments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="services/#add-ons">About Ellen</NavDropdown.Item>
              <NavDropdown.Item href="booking">Contact</NavDropdown.Item>
              <NavDropdown.Item href="booking">FAQ</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav style={{ flexGrow: 1, flexBasis: 0, justifyContent: 'center' }}>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App-header">
        <table class="contact-table">
          <tbody>
            <tr>
              <td class="contact-table-item">Telephone</td>
              <td class="contact-table-item pink-text">(816) 800-1857</td>
            </tr>
            <tr>
              <td class="contact-table-item">Email</td>
              <td class="contact-table-item pink-text">estheticianellen@gmail.com</td>
            </tr>
            <tr>
              <td class="contact-table-item">Instagram</td>
              <td class="contact-table-item pink-text">@estheticianellen</td>
            </tr>
            <tr>
              <td class="contact-table-item">Facebook</td>
              <td class="contact-table-item pink-text">Ellen Watkins Esthetics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
