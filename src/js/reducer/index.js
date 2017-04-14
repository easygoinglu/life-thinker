import {combineReducers} from "redux";
import mottos from "./mottos";
import profile from "./profile";
import journey from "./journey";
import activities from "./activities";

const thinkerApp = combineReducers({mottos, profile, journey, activities});

export default thinkerApp;