import React, { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";

function Upcoming() {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/upcoming")
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
          {launch.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.date_utc}</td>
                <td>{item.flight_number}</td>
                <td>
                  {" "}
                  <Nav.Link href="/launch">
                    <img
                      src={item.links.patch.small}
                      alt={item.links.patch.small}
                    />{" "}
                  </Nav.Link>
                </td>
                <td>{item.details}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Upcoming;
