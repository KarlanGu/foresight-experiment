
import React from "react";
import { Route, Switch } from "react-router-dom";
import TabMenu from "./common/Header";
import { CardView } from './home/Card';
import MapPage from "./map/MapPage";

function App() {
  return (
    <div className="container-fluid">
      <TabMenu/>
      <Switch>
        <Route exact path="/" component={()=><CardView/>}/>
        <Route exact path="/Map" component={MapPage}/>
      </Switch>
    </div>
  );
}

export default App;
