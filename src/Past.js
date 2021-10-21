import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Past() {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/past")
      .then((resp) => resp.json())
      .then((data) => {
        let newArr = data.reverse();
        return setLaunch(newArr);
      });
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
                  <img
                    src={item.links.patch.small}
                    alt={item.links.patch.small}
                  />{" "}
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

export default Past;
