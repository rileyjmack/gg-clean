import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../logo.svg";

const Navb = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">GG Clean</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="services">Services</Nav.Link>
          <Nav.Link href="bookus">Book Us</Nav.Link>
          <Navbar.Collapse>
            <Navbar.Text>About Us</Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navb;
