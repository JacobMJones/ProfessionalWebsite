import React, { Component } from "react";


import {
 
} from "./style.js";

class WhatIveBuilt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div background={this.state.backgroundColor}>
        <div>These are tutorials and mini projects I've completed in order to learn programming concepts.</div>
      </div>
    );
  }
}
export default WhatIveBuilt;
