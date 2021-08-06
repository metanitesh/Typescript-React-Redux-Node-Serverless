import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddTeacher from "./components/AddNewTeacher";
import Home from "./components/home";
import EditTeacher from "./EditTeacher";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addTeacher">
          <AddTeacher />
        </Route>
        <Route exact path="/editTeacher/:id">
          <EditTeacher />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;