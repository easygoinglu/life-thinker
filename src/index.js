import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import createLogger from "redux-logger";
import App from "./js/component/App";
import Home from "./js/component/Home";
import Mottos from "./js/container/Mottos";
import AddMotto from "./js/container/AddMotto";
import Activities from "./js/container/Activities";
import AddActivities from "./js/container/AddActivities";
import Journey from "./js/container/Journey";
import reducer from "./js/reducer";

const logger = createLogger();
// const store = createStore(reducer, compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/motto" component={Mottos}/>
        <Route path="/motto/add" component={AddMotto}/>
        <Route path="/activity" component={Activities}/>
        <Route path="/activity/add" component={AddActivities}/>     
        <Route path="/journey" component={Journey}/>
      </Route>
    </Router>
  </Provider>), 
  document.getElementById("container")
);