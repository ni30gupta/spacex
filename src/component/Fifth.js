import React from "react";
<<<<<<< HEAD
import { Col, Row } from "react-bootstrap";
=======
import {  Col, Row } from "react-bootstrap";
>>>>>>> d9baab3d72109312804d0aeb81c74c9eae4741bb
import "./Fifth.css";
function Fifth() {
  return (
    <div>
      <div>
        <Row>
          <div
            className="main_fifth"
            style={{ height: "80vh", justifyContent: "center" }}
          >
            <ul
              style={{
                display: "flex",
                width: "40vw",
                textAlign: "center",
                justifyContent: "space-between",
                position: "relative",
                top: "380px",
                color: "white",
              }}
            >
              <li>
                <h3>1,020 hp</h3>
                <p>Peak power</p>
              </li>
              <li>
                <h3>9.9 s</h3>
                <p>1/4 mile</p>
              </li>
              <li>
                <h3>2.5 s</h3>
                <p>0-60 mph*</p>
              </li>
            </ul>
          </div>
        </Row>
        <Row style={{ padding: "2rem 12rem" }}>
          <Col>
            <h5>Plaid</h5>
            <h3>Beyond Ludicrous</h3>
            <button className="space_btn1">Order Now</button>
          </Col>
          <Col lg={8}>
            With the most power and quickest acceleration of any SUV, Model X
            Plaid is the highest performing SUV ever built. All Model X
            powertrains, with updated battery architecture, can deliver instant
            torque at any speed.
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Fifth;
