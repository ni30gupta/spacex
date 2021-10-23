import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Latest() {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/latest")
      .then((resp) => resp.json())
      .then((data) => setLaunch(data));
  }, []);

  console.log(launch);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Launching On</th>
            <th>Flight No.</th>
            <th>Image</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr key={launch.id}>
            <td>{launch.name}</td>
            <td>{launch.date_utc}</td>
            <td>{launch.flight_number}</td>
            <td>
              <Link
                to={{
                  pathname: `/launch/${launch.id}`,
                  state: {
                    launchDetails: launch,
                  },
                }}
              >
                <img
                  src={
                    launch.links?.patch?.small
                      ? launch.links?.patch?.small
                      : "https://images.immediate.co.uk/production/volatile/sites/4/2018/07/23660653516_5c2d49effb_o-d28a022.jpg?quality=90&resize=940%2C400"
                  }
                  alt={launch.links?.patch?.small}
                  width="600px"
                />{" "}
              </Link>
            </td>
            <td>{launch.details}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Latest;
