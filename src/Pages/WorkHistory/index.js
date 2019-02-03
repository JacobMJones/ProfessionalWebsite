import React, { Component } from "react";

import styled, {ThemeProvider} from 'styled-components';
import { FullPage, FlexElement, FlexRow, FlexColumn, AllCenter } from "../../Theme/globalStyle.js";
import "../../index.css";
class WorkHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FullPage background={this.state.backgroundColor}>
        <AllCenter>Work History</AllCenter>
      </FullPage>

      
    );
  }
}
export default WorkHistory;