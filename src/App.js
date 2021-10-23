import React from "react";
import Upcoming from "./Upcoming";
import Past from "./Past";
import Latest from "./Latest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Container, Nav } from "react-bootstrap";
import Header from "./Header";
import Rocket from "./Rocket";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/latest" component={Latest} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/past" component={Past} />
          <Route
            exact
            path="/launch/:id"
            component={(rest) => <Rocket name="nitish" {...rest} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
