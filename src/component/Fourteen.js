import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import maps from "../images/map_berkeley_bg_mobile2x.jpg";
// import "./Fourteen.css";

function Fourteen() {
  const roadData = [
    {
      id: 1,
      city: "Active guidance from highway on-ramp to off-ramp",
      distance: "Active guidance from highway on-ramp to off-ramp",
    },
    {
      id: 2,
      city: "Auto Lane Change",
      distance: "Automatically change lanes while driving on the highway",
    },
    { id: 3, city: "Summon", distance: "Automatically retrieve your car" },
    {
      id: 4,
      city: "Autopark",
      distance: "Parallel and perpendicular parking, with a single touch",
    },
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
                      <p>{data.distance}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="d-flex justify-content-center">
              <button className="space_btn1">Learn More</button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fourteen;
