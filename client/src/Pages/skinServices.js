import React, { Component } from 'react';
import { Redirect } from 'react-router';
import logo from '../img/ellen-logo.PNG';
import '../App.css';
import { Accordion, Card, Button } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class SkinService extends Component {

  state = {
    currentRoutine: null,
  }

  createTask() {
    alert('task creation here')
  }

  componentWillMount() {
    this.setState({
      currentRoutine: this.props.routine,
    })
  }




  render() {
    let style = {
      background: 'black',
      color: 'white'
    }

    return (

      <div className="App">
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#fcd3db' }}>
          <Navbar.Brand href="/">E.W.E.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="services">Skin Services and Treatments</Nav.Link>
              <NavDropdown title="Skin Services and Treatments" id="collasible-nav-dropdown">
                <NavDropdown.Item href="services/#facials">Facials</NavDropdown.Item>
                <NavDropdown.Item href="services/#treatments">Treatments</NavDropdown.Item>
                <NavDropdown.Item href="services/#add-ons">Add-ons</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="booking">Book Now!</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More skincare</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Hooties
      </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div class="menu">
          <div className="menu-title">
            SKIN SERVICES
              <br></br>
               + TREATMENTS
          </div>
              <div id="facials" class="menu-header">
                Facials
            </div>
              <div class="clear"></div>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header class="menu-item">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                    <div class="menu-item-text">
                    Custom Facial
                    </div>
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Custom 80 - This 60-minute facial is designed to be exactly what your skin craves. After a skin analysis, specific products and tools will be chosen to pamper and treat your skin. Facials include a double cleanse, exfoliation, a mask, facial massage, hand/arm massage, serums, and moisturizing SPF. You will be relaxed and glowing! 
</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Anti-Aging Facial
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Anti-Aging Facial 90 - This 60-minute facial can help those with aging skin see visible results. Anti-aging specific products and tools will be used to help alleviate aging concerns such as the appearance of fine lines and wrinkles. 
</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <div id="menu" class="menu">
              <div class="menu-item">
                Facials
            </div>
              <div class="menu-item">
                Facials
            </div>
              <div class="menu-item">
                Facials
            </div>
              <div id="treatments" class="menu-header">
                Treatments
            </div>
              <div class="clear"></div>
              <div class="menu-item">
                Treatments
            </div>
              <div class="menu-item">
                Treatments
            </div>
              <div class="menu-item">
                Treatments
            </div>
            </div>
        </div>
      </div >
    );
  }
}

export default SkinService;
