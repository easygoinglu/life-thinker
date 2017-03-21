import {combineReducers} from "redux";
import mottos from "./mottos";
import journey from "./journey";
import activities from "./activities";

const thinkerApp = combineReducers({mottos, journey, activities});

export default thinkerApp;