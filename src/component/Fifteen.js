import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../images/MX-Specs-Hero-Mobile.jpg";
function Fifteen() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "black", height: "100vh", color: "white" }}
      >
        <Row>
          <Col lg={6}>
            <div style={{ position: "relative", top: "14%" }}>
              <img src={img} alt="" />
            </div>
          </Col>
          <Col lg={6} style={{ padding: "2rem 4rem" }}>
            <h2>Model X Specs</h2>
            <div className="d-flex flex-row">
              <div style={{ flex: 1 }}>
                <button className=" btn_narrow">Model X Plaid</button>
                <ul>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <button className="btn_narrow">Model X</button>
                <ul>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                  <li>
                    <p>
                      <strong>Range (EPA est.)</strong>
                    </p>
                    <p>333 mi</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Fifteen;
