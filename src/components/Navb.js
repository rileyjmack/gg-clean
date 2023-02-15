import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../logo.jpg";

const Navb = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="210"
            height="105"
            className="justify-content-left"
            alt="GG CLEAN logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="services">Services</Nav.Link>
          <Nav.Link
            href="booking"
            className="btn btn-outline-success my-2 my-sm-0"
          >
            Get Free Quote
          </Nav.Link>
          <Nav.Link href="aboutus">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navb;
