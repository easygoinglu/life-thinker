import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./component/App";
import Home from "./component/Home";
import Mottos from "./container/Mottos";
import AddMotto from "./container/AddMotto";
import Profile from "./container/Profile";
import Activities from "./container/Activities";
import AddActivities from "./container/AddActivities";
import Journey from "./container/Journey";

export default (
 <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/motto" component={Mottos}/>
    <Route path="/addMotto" component={AddMotto}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/activity" component={Activities}/>
    <Route path="/addActivity" component={AddActivities}/>     
    <Route path="/journey" component={Journey}/>
  </Route>);