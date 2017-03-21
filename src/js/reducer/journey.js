const journey = (state = [], action) => {
  switch(action.type){
    case "RECEIVE_JOURNEY":
      return action.data;
    default:
      return state;
  }
};

export default journey;