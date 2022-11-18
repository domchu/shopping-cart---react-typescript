import React from "react";
import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useShoppingCart } from "./../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
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
        {cartQuantity > 0 && (
          <button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            color="outline-primary"
            className="rounded-circle"
          >
            <GiShoppingCart style={{ color: "blue", fontSize: "2rem" }} />
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
              {cartQuantity}
            </div>
          </button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
