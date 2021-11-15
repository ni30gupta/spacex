import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Past() {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/past")
      .then((resp) => resp.json())
      .then((raw_data) => {
        let data = raw_data.reverse();
        return setLaunch(data);
      });
  }, []);
  console.log(launch);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Launched On</th>
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
                  <Link
                    to={{
                      pathname: `/launch/${item.id}`,
                      state: {
                        launchDetails: item,
                      },
                    }}
                  >
                    <img
                      src={item.links.patch.small}
                      alt={item.links.patch.small}
                    />{" "}
                  </Link>
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
