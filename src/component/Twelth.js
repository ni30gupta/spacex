import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/MX-Safety-Hero-Desktop.jpg";
function Twelth() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-between pt-5">
        <Col lg={3} xs={12} style={{ padding: "1rem 1rem 1rem 3rem" }}>
          <h5>Utility</h5>
          <h3>Even More Capable</h3>
          <p
            style={{
              fontSize: "16px",
              color: "#393C41",
              "text-align": "justify",
              paddingTop: "5rem",
            }}
          >
            With the most storage space and towing capacity of any electric SUV,
            and seating for up to seven adults, Model X delivers maximum
            utility. Front doors open and close automatically, Falcon Wing doors
            allow for easier loading and a standard trailer hitch lets you bring
            your gear anywhere you go.
          </p>
          <div style={{ height: "52vh" }}>
            <div style={{ paddingTop: "12rem", textAlign: "center" }}>
              <button className="space_btn1">Order Now</button>
            </div>
          </div>
        </Col>
        <Col lg={9} xs={12} style={{ paddingLeft: "10px" }}>
          <div className="mt-4">
            <img src={img1} alt="" width="100%" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Twelth;
