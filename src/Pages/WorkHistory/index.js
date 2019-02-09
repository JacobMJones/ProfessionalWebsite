import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import List from "../../Components/List"
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
    this.state = { checked: false, techTitle:false };
  }

  handleCheckboxChange = event =>
    this.setState({ checked: !this.state.checked, techTitle:!this.state.techTitle });
  render() {
    return (
      <FullPage overflow={"none"}>
        <HorizontalCenter>
          <Title>{this.state.techTitle ? "Tech Jobs" : "Work History"}</Title>
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
