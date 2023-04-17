import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

import Logo from "../logo.jpg";

const Navb = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Our Home Office: (347) 481 - 9759
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="navbar-static-top">
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="266"
              height="100"
              className="justify-content-left"
              alt="GG CLEAN logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav>
            <Nav.Link href="services">About Us</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Our Services"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">
                Standard Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Deep Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Disinfectant Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Office Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Commercial Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Post Construction Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Airbnb Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Move In/Out Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Garbage Removal
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">Connect</Nav.Link>
            <Nav.Link href="aboutus">Ask for a Quote</Nav.Link>
            <>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Call Now
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navb;
