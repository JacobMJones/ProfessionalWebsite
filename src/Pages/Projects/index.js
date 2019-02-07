import React, { Component } from "react";

import styled, {ThemeProvider} from 'styled-components';
import { FullPage, FlexElement, FlexRow, FlexColumn, AllCenter } from "../../Theme/globalStyle.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FullPage background={this.state.backgroundColor}>
        <AllCenter>Projects</AllCenter>
      </FullPage>

      
    );
  }
}
export default Projects;