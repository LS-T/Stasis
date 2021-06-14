import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";

function NavBar() {
  return (
    <Container >
      <nav className="navbar navbar-dark bg-dark">
        <Row>
          <Col size="md-4">
            <h1 style={{ color: "white" }}>Stasis</h1>
          </Col>
          <Col size="md-8">
            <a className="navbar-brand">Dashboard</a>
            <a className="navbar-brand"></a>
          </Col>
        </Row>
      </nav>
    </Container>
  );
}
export default NavBar;