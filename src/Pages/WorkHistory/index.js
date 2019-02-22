import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import workHistoryData from "./workHistoryData";
import CollapsableCard from "../../Components/CollapsableCard";
import PlainResume from "./PlainResume/PlainResume";
import TitleNavBar from "../../Components/TitleNavBar"
import HomeButton from "../../Components/HomeButton";
import CodeButton from "../../Components/CodeButton";
import ActionTitle from "../../Components/ActionTitle";
import {
  FlexElement,
  FlexRow,
  Title,
  HorizontalCenter,
  FullPage,
  NavButtonWrapper
} from "./style";

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
    let screenWidth = window.innerWidth;
    return (
      <FullPage background={checked2 ? "white" : "#d8cfaf"}>
        <HorizontalCenter>
          <div style={{marginTop:140}}>
          <TitleNavBar title={checked ? "Tech Jobs" : "All Jobs"} />
         
          <div style={{height:'8px'}}/>
          </div>
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
        </HorizontalCenter>

        {!this.state.checked2 ? (
          <FlexRow>
            <FlexElement />
            <FlexElement style={{ minWidth: "95vw", margin: "0 auto" }}>
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
