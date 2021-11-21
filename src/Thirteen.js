import React from "react";
import { Col, Row } from "react-bootstrap";

function Thirteen() {
  return (
    <div>
      <Row>
        <Col>
          <div
            style={{
              width: "100vw",
              height: "60vh",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video controls autoplay loop name="media">
              <source
                src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo="
                type="video/webm"
              />
            </video>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center pt-5">
        <Col lg={3}>
          <div className="d-flex flex-column">
            <p style={{ fontSize: "20px" }}>Autopilot</p>
            <h2>Future Of Driving</h2>
            <div>
              <button className="space_btn1">Order Now</button>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <p>
            Autopilot enables your car to steer, accelerate and brake
            automatically within its lane under your active supervision,
            assisting with the most burdensome parts of driving. With
            over-the-air software updates, the latest enhancements are available
            instantly.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Thirteen;
