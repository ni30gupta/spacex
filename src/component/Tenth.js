import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Seventh.css";

function Tenth() {
  return (
    <div>
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <Col lg={9} xs={12} style={{ padding: "0px 10px 0px 0px" }}>
            <div className="wrapper_7 wrapper">
              <ul>
                <li>
                  <h4>348 mi</h4>
                  <p>
                    Go anywhere with up to 348 miles of estimated range on
                    asingle charge
                  </p>
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
          <Col lg={3} xs={12} style={{ padding: "1.5rem" }}>
            <h5>Range</h5>
            <h3>Go Anywhere</h3>
            <p
              style={{
                fontSize: "16px",
                color: "#393C41",
                "text-align": "justify",
              }}
            >
              Travel farther on a single charge than any other electric SUV—and
              keep going with access to 30,000+ Superchargers globally. By
              combining up to 348 miles of estimated range with Tesla fast
              charging technology, you’ll spend less time charging and even more
              time on the road.
            </p>
            <div style={{ height: "52vh" }}>
              <div style={{ paddingTop: "12rem", textAlign: "center" }}>
                <button className="space_btn1">Order Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tenth;
