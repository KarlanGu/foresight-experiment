
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
