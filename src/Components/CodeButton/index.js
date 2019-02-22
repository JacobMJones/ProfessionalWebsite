import React, { Component } from "react";
import {Code} from './style'

class CodeButton extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    const { functionToCall, image } = this.props;
    return (
      <Code
        as='img'
        src={image}
        onClick={() => {
          functionToCall();
        }}
      />
    );
  }
}
export default CodeButton;
