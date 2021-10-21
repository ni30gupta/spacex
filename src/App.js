import React from "react";
import Latest from "./Upcoming";
import Past from "./Past";
import Upcoming from "./Latest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/past">
            <Past />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
