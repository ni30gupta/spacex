import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/img1.avif";
import img2 from "../images/img2.avif";
import img3 from "../images/img3.avif";

function Forth() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="blank"></div>
      <Container style={{ padding: "0 3rem 2rem 3rem" }}>
        <Row style={{ display: "flex", "align-items": "center" }}>
          <Col lg={6}>
            <img
              style={{ width: "100%" }}
              type="image/avif"
              src={img1}
              alt="img1"
            />
          </Col>
          <Col lg={6} style={{ color: "white", padding: "0 50px 0 80px" }}>
            <h3>Wireless Gaming</h3>
            <p>
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat.
            </p>
          </Col>
        </Row>

        <Row style={{ display: "flex", "align-items": "center" }}>
          <Col lg={6} style={{ color: "white", padding: "0 80px 0 50px" }}>
            <h3>Stay Connected</h3>
            <p>
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger, with enough power to fast-charge your tablets and
              laptop.
            </p>
          </Col>
          <Col lg={6}>
            <img
              style={{ width: "100%" }}
              type="image/avif"
              src={img2}
              alt="img1"
            />
          </Col>
        </Row>

        <Row style={{ display: "flex", "align-items": "center" }}>
          <Col lg={6}>
            <img
              style={{ width: "100%" }}
              type="image/avif"
              src={img3}
              alt="img3"
            />
          </Col>
          <Col lg={6} style={{ color: "white", padding: "0 50px 0 80px" }}>
            <h3>Your Best Audio System</h3>
            <p>
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers the best listening experience wherever you are.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forth;
