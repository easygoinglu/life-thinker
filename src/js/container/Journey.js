import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Highcharts from "highcharts";
import {fetchJourney} from "../action";
      
class Journey extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {dispatch} = this.props;
            
    const onFetchJourneySuccess = function(){
      Highcharts.chart("journey-chart", {
          chart: {
              type: "spline"
          },
          title: {
              text: "Life Journey"
          },
          subtitle: {
              text: "moments of my life"
          },
          xAxis: {
              type: "datetime",
              dateTimeLabelFormats: { // don"t display the dummy year
                  month: "%e. %b \ '%y"
              },
              title: {
                  text: "Date"
              }
          },
          yAxis: {
              title: {
                  text: "Satisfaction Level"
              },
              tickInterval: 1,
              max: 10,
              min: 0
          },
          plotOptions: {
              spline: {
                  marker: {
                      enabled: true
                  }
              }
          },
          series: this.props.journey
      });
    }.bind(this);
  
    const onFetchJourneyFailure = function(){
      console.log("ERROR", "fail to fetchJourney()");
    }

    dispatch(fetchJourney()).then(onFetchJourneySuccess, onFetchJourneyFailure);
  }

  render(){
    return (
      <section id="journey">
        <div id="journey-chart"/>
      </section>
    );
  }
}

Journey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  journey: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  journey: state.journey    
});

export default connect(mapStateToProps)(Journey);