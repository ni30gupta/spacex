import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./component/First";
import Second from "./component/Second";
import Third from "./component/Third";
import Forth from "./component/Forth";
import Fifth from "./component/Fifth";
import Sixth from "./component/Sixth";
import Seventh from "./component/Seventh";

export default class App extends Component {
  render() {
    return (
      <>
        <First />
        <Second />
        <Third />
        <Forth />
        <Fifth />
        <Sixth />
        <Seventh />
      </>
    );
  }
}
