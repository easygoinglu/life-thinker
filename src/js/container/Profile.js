import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import classnames from "classnames";
import {fetchProfile} from "../action";
import ScrollMagic from "scrollmagic";
import _ from "lodash";

  
class Profile extends Component{
  
  constructor(props){
    super(props);

    this.state = {items: [], itemClassName: ""};
    this.addItems = this.addItems.bind(this);
    this.addItemsCallback = this.addItemsCallback.bind(this);
  }

  componentDidMount(){
    const {dispatch} = this.props;

    dispatch(fetchProfile(this.addItemsCallback));
  }

  addItems(amount){
    if(this.props.profile.length > this.state.items.length){
      document.querySelector(".loader").classList.add("active");      
      let items = this.props.profile.slice(0, this.state.items.length + amount);
      items = _.map(items, _.clone);
      this.setState({items: items});
      document.querySelector(".loader").classList.remove("active");    
    }else{
      document.querySelector(".loader").classList.add("hide");     
    }
  }

  addItemsCallback(){  
    this.setState({itemClassName: "show"});

    let controller = new ScrollMagic.Controller();
    let loaderScene = new ScrollMagic.Scene({triggerElement: document.querySelector(".loader"), triggerHook: "onEnter"})
      .on("enter", function () {
        if (!document.querySelector(".loader").classList.contains("active")) {
          setTimeout(this.addItems.apply(this, [10]), 1000);
        }
      }.bind(this));  

    controller.addScene([
      loaderScene
    ]);
  }

  render(){
    return (
      <section id="profile">
        <div className="info">
          <h1>Lucy Lu</h1>
          <div className="photo"></div>
        </div>
        <ul className="items">
          {
            this.state.items.map((item, index) => {
              return (
                 <li key={index} className={classnames(["item", this.state.itemClassName])}>
                  <img className="item-image" src={`${process.env.NODE_ENV === "production" ? "dist/": ""}img/${item.img}`}/>
                  <div className="item-name">{item.name}</div>
                </li>  
              )
            })
          }
        </ul>
        <div className="loader"><i className="fa fa-circle-o-notch fa-spin fa-pulse fa-3x"></i></div>
      </section>  
    );
  }
} 

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.array
}

const mapStateToProps = (state)=> ({
    profile: state.profile
  }
);

export default connect(mapStateToProps)(Profile);