
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import { CardView } from './home/Card';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Switch>
        <Route exact path="/" component={()=><CardView/>}/>
      </Switch>
    </div>
  );
}

export default App;
