import React from "react";

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <ul
        style={{
          display: "flex",
          width: "50vw",
          justifyContent: "space-around",
          color: "gray",
        }}
      >
        <li> Tesla © 2021</li>
        <li> Privacy & Legal </li>
        <li> Contact</li>
        <li> Careers</li>
        <li> News </li>
        <li> Engage</li>
        <li> Locations</li>
      </ul>
    </div>
  );
}

export default Footer;
