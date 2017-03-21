import _ from "lodash";

const activities = (state = [], action) => {
  let activity;

  switch(action.type){
    case "ADD_Activity":
      activity = _.map(state, _.clone);
      activity.push(action.data);  
      return activity;  
    case "RECEIVE_Activity":
      return action.data      
    default:
      return state;
  }
};

export default activities;