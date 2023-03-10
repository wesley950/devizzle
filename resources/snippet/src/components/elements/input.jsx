import React from "react";

import "./elements.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <input type={this.props.type} className="Input" />
  }
}

export default Input;