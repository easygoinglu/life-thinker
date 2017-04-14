import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import {addActivity} from "../action";
import util from "../util";
import Lang from "../../lang/Lang";


class AddActivities extends Component{

  constructor(props){
    super(props);

    this.handleCalendar = this.handleCalendar.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
  }

  componentDidMount(){
    window.addEventListener("click", this.closeCalendar);
  }

  componentWillUnmount(){
    window.removeEventListener("click", this.closeCalendar);        
  }

  handleCalendar(e){
    e.stopPropagation();

    if(this.calendarContainer.classList.contains("hide")){
      this.calendarContainer.classList.remove("hide");
    }else{
      this.calendarContainer.classList.add("hide");
    }
  }

  closeCalendar(){
    if(!this.calendarContainer.classList.contains("hide")){
      this.calendarContainer.classList.add("hide");
    }
  }

  selectDate(date){
    this.date.value = util.date.format(date);
    this.calendarContainer.classList.add("hide");    
  }

  render(){
    const {dispatch} = this.props;
    let today = new Date();

    return (    
      <section id="add-activity">
        <form onSubmit={e => {
          e.preventDefault();

          if (!this.date.value.trim() || !this.activity.value.trim()) {
            return
          }

          dispatch(addActivity({date: this.date.value, activity: this.activity.value, description: this.description.value, grade: this.grade.value}));
          browserHistory.push("/activity");  
        }}>      
          <div>{Lang.getL10N("date")}<input type="text" readOnly ref={node => {this.date = node}} onClick={this.handleCalendar}/></div>
          <div className="calendar-container hide" ref={node => {this.calendarContainer = node}}>
            <InfiniteCalendar
              className="calendar"
              width={360}
              height={250}
              selected={today}               
              onSelect={this.selectDate}/>
          </div>
          <div>
            Activity: <input type="text" ref={node => {this.activity = node}} />
          </div>
          <div>
            <div>{Lang.getL10N("description")}</div>
            <textarea rows="4" cols="50" ref={node => {this.description = node}}></textarea>
          </div>
          <div>
            Grade: 
            <select ref={node => {this.grade = node}}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <button type="submit" className="btn save-activity-btn">{Lang.getL10N("save")}</button>
        </form>
      </section>);
  }
}

AddActivities.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddActivities);