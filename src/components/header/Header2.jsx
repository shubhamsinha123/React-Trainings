import React from "react";
import "./style.css";
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/logo.svg";
class Headertwo extends React.Component {
  render() {
    return (
      <>
      <Router>
        <Navbar bg="light" className="main" expand="lg">
          <Container fluid className="second-main">
            <img srcSet = {Logo} alt = "logo" />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              </Nav>
              <Nav>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Link to="/"> */}
              <Nav.Link href="/Main">
                Service
              </Nav.Link>
              
              <Nav.Link href="#career">
                Career
              </Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Router>
      </>
    );
  }
}
export default Headertwo;
