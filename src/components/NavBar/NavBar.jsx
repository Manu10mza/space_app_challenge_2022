import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://2022.spaceappschallenge.org/challenges/2022-challenges/moonquake-map/teams/moonwalk/project">
            The Moonquake Project
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="features">Features</Nav.Link> */}
            <Nav.Link href="aboutUs">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
