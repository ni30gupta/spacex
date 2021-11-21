import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Seventh.css";

function Seventh() {
  return (
    <div>
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <Col lg={3} xs={12} style={{ padding: "1.5rem" }}>
            <h5>Utility</h5>
            <h3>Even More Capable</h3>
            <p
              style={{
                fontSize: "16px",
                color: "#393C41",
                "text-align": "justify",
              }}
            >
              With the most storage space and towing capacity of any electric
              SUV, and seating for up to seven adults, Model X delivers maximum
              utility. Front doors open and close automatically, Falcon Wing
              doors allow for easier loading and a standard trailer hitch lets
              you bring your gear anywhere you go.
            </p>
            <div style={{ height: "52vh" }}>
              <div style={{ paddingTop: "12rem", textAlign: "center" }}>
                <button className="space_btn1">Order Now</button>
              </div>
            </div>
          </Col>
          <Col lg={9} xs={12} style={{ paddingLeft: "10px" }}>
            <div className="wrapper_7">
              <ul>
                <li>
                  <h4>91ft*</h4>
                  <p>Storage Capacity</p>
                </li>
                <li>
                  <h4>5000 lbs</h4>
                  <p>Towing Capacity</p>
                </li>
                <li>
                  <h4>Door img</h4>
                  <p>Falcon Wing Door</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Seventh;
