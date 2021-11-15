import React from "react";
import "./First.css";

function First() {
  const menu = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];
  const sidemenu = ["Shop", "Account", "Menu"];
  return (
    <div className="main">
      <div className="header">
        <div className="header_left">
          <a aria-label="Tesla Logo" class="tds-site-logo-link" href="/">
            <svg
              class="xvg_icon"
              width="150px"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
                fill="var(--tds-icon--fill, #171a20)"
              ></path>
            </svg>
          </a>
        </div>
        <div className="header_mid">
          <ul className="menu_list">
            {menu.map((x) => {
              return (
                <li>
                  <a href={x}>{x}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="header_right">
          <ul className="side_menu_list">
            {sidemenu.map((x) => {
              return (
                <li>
                  <a href={x}>{x}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="heading">
        <h1>Model X</h1>
        <p>Plaid</p>
      </div>
      <div className="footer">
        <ul className="bottom_menu">
          <li>
            <h1>333 mi</h1>
            <p>Range (EPA est.)</p>
          </li>
          <li>
            <h1>2.5s</h1>
            <p>0-60 mph*</p>
          </li>
          <li>
            <h1>9.9s</h1>
            <p>1/4 Mile</p>
          </li>
          <li>
            <h1>1,020hp</h1>
            <p>Peak Power</p>
          </li>

          <li>
            <button className="space_btn">ORDER NOW</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default First;
