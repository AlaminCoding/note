import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppState from "./context/app-state";
import Header from "./components/header";
import Home from "./components/home";
import Note from "./components/note";
import SingleNote from "./components/single-note";
import EditNote from "./components/edit-note";
function App() {
  return (
    <React.Fragment>
      <AppState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/notes">
              <Note />
            </Route>
            <Route path="/note/:id">
              <SingleNote />
            </Route>
            <Route path="/update/:id">
              <EditNote />
            </Route>
          </Switch>
        </Router>
      </AppState>
    </React.Fragment>
  );
}

export default App;
