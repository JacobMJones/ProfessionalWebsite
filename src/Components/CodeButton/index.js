import React, { Component } from "react";


class CodeButton extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    const { functionToCall } = this.props;
    return (
      <img
        style={{ width: "4vw", height: "4vw" }}
        src="/images/code.png"
        onClick={() => {
          functionToCall();
        }}
      />
    );
  }
}
export default CodeButton;
