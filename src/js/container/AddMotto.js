import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {addMotto} from "../action";
import Label from "../component/Label";

  
let AddMotto = ({ dispatch }) => {
  let proverb, 
      author;
         
  return (
    <section id="add-motto">
      <h2>Add Motto</h2>
      <form onSubmit={e => {
        e.preventDefault();
        if (!proverb.value.trim()) {
          return
        }

        dispatch(addMotto({proverb: proverb.value, author: author.value}));
        browserHistory.push("/motto");  
      }}>
        <div>
          <div>Author:</div>
          <input ref={node => {author = node}} />
        </div>      
        <div>
          <div>Proverb: </div>
          <textarea rows="4" cols="50" ref={node => {proverb = node}}></textarea>
        </div>
        <button type="submit" className="save-motto-btn">Save</button>
      </form>
    </section>
  )
}
AddMotto = connect()(AddMotto)

AddMotto.propTypes = {
  dispatch: PropTypes.func
};

export default AddMotto;