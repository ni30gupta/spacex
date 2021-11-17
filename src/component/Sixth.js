import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/MX-Performance-Dual-Motor-Desktop.jpg";
import "./Sixth.css";
function Sixth() {
  return (
    <div className="main_sixth">
      <Container>
        <Row className="display-flex justify-content-center">
          <Col lg={8}>
            <h4>Electric Powertrain</h4>
            <p>
              Model X platforms unite powertrain and battery technologies for
              unrivaled performance, range and efficiency. New module and pack
              thermal architecture allows faster charging and gives you more
              power and endurance in all conditions.
            </p>
          </Col>
        </Row>
        <Row>
          <img src={img1} alt="" />
        </Row>
        <Row className="display-flex justify-content-center">
          <Col className="specs_li" lg={4}>
            <h5>Model X</h5>
            <p>
              Dual Motor All-Wheel Drive platform has the longest range, and now
              delivers incredible power and acceleration.
            </p>
            <ul>
              <li>
                <h4>3.8 s </h4>
                <h6>0-60 mph</h6>
              </li>
              <li>
                <h4>348 mi </h4>
                <h6>range (EPA est.)</h6>
              </li>
              <li>
                <h4> 670 hp </h4>
                <h6>peak power</h6>
              </li>
            </ul>
          </Col>
          <Col className="specs_li" lg={4}>
            <h5>Model X</h5>
            <p>
              Dual Motor All-Wheel Drive platform has the longest range, and now
              delivers incredible power and acceleration.
            </p>
            <ul>
              <li>
                <h4>3.8 s </h4>
                <h6>0-60 mph</h6>
              </li>
              <li>
                <h4>348 mi </h4>
                <h6>range (EPA est.)</h6>
              </li>
              <li>
                <h4> 670 hp</h4>
                <h6>peak power</h6>
              </li>
            </ul>
          </Col>
          <p className="text-center">* With rollout subtracted</p>
        </Row>
      </Container>
    </div>
  );
}

export default Sixth;
