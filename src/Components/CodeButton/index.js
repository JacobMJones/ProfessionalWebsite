import React, { Component } from "react";
import {Code} from './style'

class CodeButton extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    const { functionToCall } = this.props;
    return (
      <Code
        as='img'
        src="/images/code.png"
        onClick={() => {
          functionToCall();
        }}
      />
    );
  }
}
export default CodeButton;
