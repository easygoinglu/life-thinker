import _ from "lodash";

const mottos = (state = [], action) => {
  let motto;
  
  switch (action.type){
    case "ADD_MOTTO": 
      motto = _.map(state, _.clone);
      motto.push(action.data);
      return mottos;
    case "RECEIVE_MOTTO":
      return action.data
    default:
      return state;
  }
};

export default mottos;