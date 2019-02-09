import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import styled, { ThemeProvider } from "styled-components";
import {
  FullPage,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter,
  Title,
  HorizontalCenter
} from "../../Theme/globalStyle.js";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }

  handleCheckboxChange = event =>
    this.setState({ checked: !this.state.checked });
  render() {
    return (
      <FullPage overflow={"none"}>
        <HorizontalCenter>
          <Title>Work History</Title>
          <br/>
          <label>
            <Checkbox
              className="yo"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
              text={'only tech related'}
            />  
          </label> 
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default WorkHistory;
