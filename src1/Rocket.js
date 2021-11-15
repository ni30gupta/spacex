import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

function Rocket(props) {
  const [rocketDetails, setRocket] = useState({});
  const [launchDetails, setLaunchDetails] = useState({});

  useEffect(() => {
    setLaunchDetails(props.location.state.launchDetails);
  }, [props.location.state.launchDetails]);

  console.log(launchDetails);
  useEffect(() => {
    fetch(
      `https://api.spacexdata.com/v4/rockets/${props.location.state.launchDetails.rocket}`
    )
      .then((resp) => resp.json())
      .then((data) => setRocket(data));
  }, [props.location.state.launchDetails]);

  console.log(rocketDetails);

  const {
    name,
    date_utc,
    flight_number,
    details,
    success,
    payloads,
    youtube_id,
  } = launchDetails;
  // const { article, wikipedia } = launchDetails?.links;

  return (
    <div>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {date_utc}{" "}
          </Card.Subtitle>
          {/* <Card.Text> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Attr</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flight No.</td>
                <td>{flight_number}</td>
              </tr>
              <tr>
                <td>Details</td>
                <td>{details}</td>
              </tr>
              <tr>
                <td>success</td>
                <td>{success ? "Successed" : "Failed"}</td>
              </tr>
              <tr>
                <td>List of payload</td>
                <td>{payloads}</td>
              </tr>
              <tr>
                <td>YouTube</td>
                <td>
                  {" "}
                  <iframe
                    title="youtube  "
                    src={
                      "https://www.youtube.com/embed/" +
                      youtube_id +
                      "?autoplay=1"
                    }
                    width="800"
                    height="600"
                  ></iframe>
                </td>
              </tr>
              {/* <tr>
                  <td>Article Link</td>
                  <td>
                    <a href={article}> {article} </a>
                  </td>
                </tr>
                <tr>
                  <td>Wikipedia Link</td>
                  <td>
                    <a href={wikipedia}>{wikipedia}</a>
                  </td>
                </tr> */}
              <tr>
                <td>Rocket Name</td>
                <td>{rocketDetails.name}</td>
              </tr>
            </tbody>
          </Table>
          {/* </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Rocket;
