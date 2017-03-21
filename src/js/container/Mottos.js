import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {fetchMotto} from "../action";
  
class Mottos extends Component{
  
  constructor(props){
    super(props);

    this.addMottoClick = this.addMottoClick.bind(this);
  }

  componentDidMount(){
    const {dispatch} = this.props;

    //temporary code to avoid fetch data twice and keep current data, because server side is not ready
    if(this.props.mottos.length === 0){
      dispatch(fetchMotto());
    }
  }

  addMottoClick(){
    browserHistory.push("/motto/add");  
  }

  render(){
    return (
      <section id="mottos">
        <div className="clearfix">
          <i className="add-motto-btn fa fa-plus-circle fa-4x" onClick={this.addMottoClick}/>
        </div>
        <ul className="motto-list">
          {
            this.props.mottos.map((motto, index) => {
              return (
                <li key={index} className="motto clearfix">
                  <div className="proverb">{motto.proverb}</div>
                  <div className="author">{motto.author && motto.author.length > 0 && `~ ${motto.author}` || "~ Unknown"}</div>
                </li>
              )
            })
          }
        </ul>
      </section>  
    );
  }
} 

Mottos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mottos: PropTypes.array
}

const mapStateToProps = (state)=> ({
    mottos: state.mottos
  }
);

export default connect(mapStateToProps)(Mottos);