import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import maps from "../images/map_berkeley_bg_mobile2x.jpg";
import "./Eleventh.css";

function Eleventh() {
  const roadData = [
    { id: 1, city: "San Jose to Los Angles", distance: 340 },
    { id: 1, city: "Berkeley to Lake Tahoe", distance: 178 },
    { id: 1, city: "Manhattan to Boston", distance: 211 },
    { id: 1, city: "Fort Lauderdale to Orlando", distance: 195 },
  ];
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="main_11">
              <h1>Freedom To Travel</h1>
              <p>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <img src={maps} width="100%" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="road_main">
              <ul className="road_data">
                {roadData.map((data) => {
                  return (
                    <li className="road_list" key={data.id}>
                      <h5>{data.city}</h5>
                      <h3>
                        {data.distance}
                        <span style={{ fontSize: "0.8em" }}> miles</span>
                      </h3>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <button className="space_btn1">Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Eleventh;
