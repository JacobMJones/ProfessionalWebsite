import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import workHistoryData from "./workHistoryData";
import CollapsableCard from "../../Components/CollapsableCard";
import List from "../../Components/List";
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
    this.state = { checked: false, techTitle: false };
  }

  handleCheckboxChange = event =>
    this.setState({
      checked: !this.state.checked,
      techTitle: !this.state.techTitle
    });
  render() {
    const { techTitle, checked } = this.state;
    return (
      <FullPage overflow={"none"}>
        <HorizontalCenter>
          <Title>{techTitle ? "Tech Jobs" : "Work History"}</Title>
          <br />
          <label>
            <Checkbox
              className="yo"
              checked={checked}
              onChange={this.handleCheckboxChange}
              text={"only tech related"}
            />
          </label>
        </HorizontalCenter>
        <FlexRow>
          <FlexElement />
          <FlexElement minWidth={"80vw"}>
            <CollapsableCard data={workHistoryData} />
          </FlexElement>
          <FlexElement />
        </FlexRow>
      </FullPage>
    );
  }
}
export default WorkHistory;
