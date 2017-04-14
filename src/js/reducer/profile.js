import _ from "lodash";

const profile = (state = [], action) => {
  
  switch (action.type){
    case "RECEIVE_PROFILE":
      return action.data
    default:
      return state;
  }
};

export default profile;