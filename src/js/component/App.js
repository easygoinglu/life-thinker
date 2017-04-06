import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router";
import Slideout from "slideout";
import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "../../css/style.less";
import NavLink from "./NavLink"

class App extends Component{
  constructor(props){
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount(){

    let container = document.querySelector(".container");    

    this.slideout = new Slideout({
      "panel": container,
      "menu": document.querySelector(".menu"),
      "padding": 256,
      "tolerance": 1170,
      "easing": "linear"
    });   

    this.slideout
      .on("beforeopen", () => {
        container.classList.add("panel-open");
      })
      .on("beforeclose", () => {
        container.classList.remove("panel-open");
        container.removeEventListener("click", this.closeMenu);                
      })
      .on("open", () => {
        container.addEventListener("click", this.closeMenu);
      });

    // Toggle button
    document.querySelector(".menu-btn").addEventListener("click", () => {
      this.slideout.toggle();
    });      
  }

  handleMenuClick(e){
    const path = e.target.getAttribute("data-id");
    if(path){
      browserHistory.push(`/${path}`);      
    }
    this.closeMenu(e)
  }

  closeMenu(e){
    e.preventDefault();
    this.slideout.close();    
  }

  render(){
    return (
      <section>
        <nav className="menu">
          <ul className="menu-items" onClick={this.handleMenuClick}>
            <li className="menu-item" data-id="home"><NavLink className="menu-item-link" to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            <li className="menu-item" data-id="motto"><NavLink className="menu-item-link" to="/motto">Motto</NavLink></li>
            <li className="menu-item" data-id="activity"><NavLink className="menu-item-link" to="/activity">Activity</NavLink></li>
            <li className="menu-item" data-id="journey"><NavLink className="menu-item-link" to="/journey">Journey</NavLink></li>
          </ul>
        </nav>
        <div className="container">
          <header>
            <div className="masthead">
              <i className="btn menu-btn fa fa-bars"/>
            </div>  
          </header>        
          <main className="panel">         
              {this.props.children}    
          </main>
        </div>
      </section>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;