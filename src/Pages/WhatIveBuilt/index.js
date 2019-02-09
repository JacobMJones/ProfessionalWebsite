import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";
import {
  FullPage,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter
} from "../../Theme/globalStyle.js";

class WhatIveBuilt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FullPage background={this.state.backgroundColor}>
        <AllCenter>These are tutorials and mini projects I've completed in order to learn programming concepts.</AllCenter>
      </FullPage>
    );
  }
}
export default WhatIveBuilt;
