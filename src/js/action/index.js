import axios from "axios";

export function addMotto(motto){
  return {
    type: "ADD_MOTTO",
    data: motto
  }
}

function receiveMotto(mottos){
  return {
    type: "RECEIVE_MOTTO",
    data: mottos
  }
}

export function fetchMotto(){
  return dispatch => {
    return axios.get("./data/mottos.json")
             .then(response => {dispatch(receiveMotto(response.data.mottos))})
             .catch(function(error){
               if(error.response){
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
               }else{
                 console.log("Error", error.message);
               }
             });
  };
}

function receiveProfile(profile){
  return {
    type: "RECEIVE_PROFILE",
    data: profile
  }
}

export function fetchProfile(callback){
  return dispatch => {
    return axios.get("./data/profile.json")
             .then(response => {dispatch(receiveProfile(response.data.profile))})
             .then(callback)
             .catch(function(error){
               if(error.response){
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
               }else{
                 console.log("Error", error.message);
               }
             });
  };
}

export function addActivity(activityData){
  return {
    type: "ADD_Activity",
    data: activityData
  }
}

function receiveActivity(activityData){
  return {
    type: "RECEIVE_Activity",
    data: activityData
  }
}

export function fetchActivity(){
  return dispatch => {
    return axios.get("./data/activities.json")
             .then(response => {dispatch(receiveActivity(response.data.activities))})
             .catch(function(error){
               if(error.response){
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
               }else{
                 console.log("Error", error.message);
               }
             });
  };
}

function receiveJourney(journey){
  return {
    type: "RECEIVE_JOURNEY",
    data: journey
  }
}

export function fetchJourney(){
  return dispatch => {
    return axios.get("./data/journey.json")
             .then(response => {dispatch(receiveJourney(response.data.journey))})
             .catch(function(error){
               if(error.response){
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
               }else{
                 console.log("Error", error.message);
               }
             });
  };
}


