import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Eight.css";

function Eighth() {
  return (
    <div>
      <div className="main_8">
        <h3 className="list_8">0.24 cd</h3>
        <ul className="list_8">
          <li>
            <p>New wheels and improved handling</p>
          </li>
          <li>
            <p>Lowest-drag SUV on Earth</p>
          </li>
          <li>
            <p>Refined exterior styling</p>
          </li>
        </ul>
      </div>

      <Container style={{ padding: "2rem 0rem" }}>
        <Row>
          <Col lg={5}>
            <div style={{ paddingLeft: "100px" }}>
              <h5>Exterior</h5>
              <h2>Designed for Efficiency</h2>
              <button className="space_btn1">Order Now</button>
            </div>
          </Col>
          <Col lg={7}>
            <p>
              With the lowest drag coefficient of any SUV, Model X is built for
              speed and range. Refined aerodynamic elements work together with
              new wheels and tires to help you travel farther, with sharper
              handling and better ride comfort.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Eighth;
