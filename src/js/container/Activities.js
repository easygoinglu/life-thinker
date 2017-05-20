import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {fetchActivity} from "../action";
import Label from "../component/Label";
import Lang from "../../lang/Lang";

  
class Activities extends Component{
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {dispatch} = this.props;

    //temporary code to avoid fetch data twice and keep current data, because server side is not ready
    if(this.props.activities.length === 0){
      dispatch(fetchActivity());
    }
  }

  addActivityClick(){
    browserHistory.push("/addActivity");  
  }

  render(){
    return (
      <section id="activities">
        <div className="clearfix">
          <i className="add-activity-btn fa fa-plus-circle fa-4x" onClick={this.addActivityClick}/>
        </div>     
        <div className="activity-list">
        {
          this.props.activities.map((activity, index) => {
            return(  
              <div key={index} className="activity">
                <div className="date">{activity.date}</div> 
                <div><Label>{Lang.getL10N("grade")}</Label> {activity.grade}</div>              
                <div><Label>{Lang.getL10N("activity")}</Label> {activity.activity}</div>
                <div><Label>{Lang.getL10N("description")}</Label> {activity.description}</div>
              </div>
            )
          })
        }
        </div>
      </section>
    );
  }
}

Activities.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activities: PropTypes.array
}

const mapStateToProps = (state)=> ({
    activities: state.activities
  }
);

export default connect(mapStateToProps)(Activities);