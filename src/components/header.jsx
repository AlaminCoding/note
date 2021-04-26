import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <h2>REACT NOTE</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notes">Note</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
