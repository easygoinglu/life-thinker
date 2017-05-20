import React from "react";
import {render} from "react-dom";
import {Router, browserHistory} from "react-router";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import createLogger from "redux-logger";
import route from "./js/route";
import reducer from "./js/reducer";

const logger = createLogger();
// const store = createStore(reducer, compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

render((
  <Provider store={store}>
    <Router routes={route} history={browserHistory}/>
  </Provider>), 
  document.getElementById("container")
);