import React from "react";
import Upcoming from "./Upcoming";
import Past from "./Past";
import Latest from "./Latest";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Header from "./Header";
import Rocket from "./Rocket";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/" exact>
            <Latest />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/past">
            <Past />
          </Route>
          <Route path="/launch/id:">
            <Rocket />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Header />
  );
}

export default App;
