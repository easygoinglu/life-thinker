import React, {PropTypes} from "react";
import classnames from "classnames";

const Label = (props) => {
  let className = classnames("bold-font", props.className);
  return (<label className={className}>{props.children}</label>)
};

export default Label;