import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../images/MX-Order-Hero-Desktop.jpg";

function Sixteen() {
  return (
    <div>
      <Container
        className="d-flex align-items-center"
        fluid
        style={{ height: "100vh", padding: "2rem " }}
      >
        <Row>
          <Col lg={6} className="d-flex align-items-center p-5">
            <div className="p-5">
              <h3 className="pb-4">Model X</h3>
              <div className="d-flex flex-row justify-content-between mt-5">
                <button style={{ width: "220px" }} className="space_btn1 ">
                  ORDER NOW
                </button>
                <button
                  style={{ width: "220px", marginLeft: "10px" }}
                  className="space_btn1 "
                >
                  COMPARE
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <img width="100%" src={img} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sixteen;
