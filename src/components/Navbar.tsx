import React from "react";
import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          color="outline-primary"
          className="rounded-circle"
        >
          <FiShoppingCart style={{ color: "blue" }} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              color: "white",
              top: "0",
              right: "0",
              transform: "translate(25%, 25%)",
            }}
          >
            5
          </div>
        </button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
