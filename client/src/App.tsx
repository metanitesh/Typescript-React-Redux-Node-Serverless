import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddTeacher from "./components/AddNewTeacher";
import Home from "./components/home";

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
      </Switch>
    </Router>
     );
}
export default App;