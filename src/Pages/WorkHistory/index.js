import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import workHistoryData from "./workHistoryData";
import CollapsableCard from "../../Components/CollapsableCard";
import PlainResume from "./PlainResume";
import List from "../../Components/List";
import { BaseAnimation } from "animate-css-styled-components";
import Animate, {
  FlipInX,
  Flash,
  Bounce,
  FadeOut,
  FadeIn,
  SlideInUp
} from "animate-css-styled-components";
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
    this.state = {
      checked: true,
      checked2: false,
      techTitle: true,
      techOnly: true
    };
  }

  handleCheckboxChange = event =>
    this.setState({
      checked: !this.state.checked,
      techTitle: !this.state.techTitle
    });

  handleCheckboxChangeResumeStyle = event =>
    this.setState({
      checked2: !this.state.checked2
    });
    
  render() {
    const { techTitle, checked, techOnly, checked2 } = this.state;
    return (
      <FullPage overflowY={"none"} background={checked2 && "white"}>
        <HorizontalCenter>
          <Title marginTop={40}>
            {techTitle ? "Tech Jobs" : "Work History"}
          </Title>
          <br />
          <div style={{ height: "10px" }} />
          <label>
            <Checkbox
              className="yo"
              checked={checked}
              onChange={this.handleCheckboxChange}
              text={"tech only"}
            />
          </label>
          <label style={{ marginLeft: "20px" }}>
            <Checkbox
              className="yo2"
              checked={checked2}
              onChange={this.handleCheckboxChangeResumeStyle}
              text={"plain resume"}
            />
          </label>
          <div style={{ height: "10px" }} />
        </HorizontalCenter>
        {!this.state.checked2 ? (
          <FlexRow>
            <FlexElement />
            <FlexElement style={{ minWidth: "80vw", margin: "0 auto" }}>
              <CollapsableCard data={workHistoryData} showOnlyTech={checked} />
            </FlexElement>
            <FlexElement />
          </FlexRow>
        ) : (
          <PlainResume data={workHistoryData} showOnlyTech={checked} />
        )}
      </FullPage>
    );
  }
}
export default WorkHistory;
