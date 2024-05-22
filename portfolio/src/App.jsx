import React from "react";
import Home from "./Pages";
import Aboutme from "./Pages/Home/AboutMe";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Pages/Home/NavBar";
import MySkills from "./Pages/Home/MySkills";
function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={<div>404 error </div>} />
          <Route path="/about" component={Aboutme} />
          <Route path="/skills" component={MySkills} />
        </Switch>
      </Router>
  
        
  );
}
export default App;
