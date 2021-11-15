import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./component/First";
import Second from "./component/Second";
import Third from "./component/Third";

export default class App extends Component {
  render() {
    return (
      <>
        <First />
        <Second />
        <Third />
      </>
    );
  }
}
