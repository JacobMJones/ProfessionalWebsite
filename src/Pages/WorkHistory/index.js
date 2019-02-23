import React, { Component } from "react";
import Checkbox from "../../Components/Checkbox";
import workHistoryData from "./workHistoryData";
import CollapsibleCard from "../../Components/CollapsibleCard";
import PlainResume from "./PlainResume/PlainResume";
import TitleNavBar from "../../Components/TitleNavBar";
import codeData from "../../Constants/codeData";
import PrismCode from "../../Components/PrismCode";
import getCode from "../../Functions/getCode.js";

import {
  FlexElement,
  FlexRow,
  HorizontalCenter,
  FullPage,
  TitleWrapper,
  CheckboxWrapper
} from "./style";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techChecked: true,
      plainResumeChecked: false,
      techTitle: true,
      techOnly: true,
      showCode: false,
      code: []
    };
  }

  async componentDidMount() {
    let arrayOfCode = [];
    codeData.WorkHistoryCode.forEach(async function(element) {
      let code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }
  showCode = () =>
    this.setState(prev => {
      return {
        showCode: !prev.showCode
      };
    });

  handleCheckboxChange = () =>
    this.setState(prev => {
      return {
        techChecked: !prev.techChecked,
        techTitle: !prev.techTitle
      };
    });

  handleCheckboxChangeResumeStyle = event =>
    this.setState(prev => {
      return {
        plainResumeChecked: !prev.plainResumeChecked
      };
    });

  render() {
    const { techChecked, plainResumeChecked, code } = this.state;

    return (
      <FullPage background={plainResumeChecked ? "white" : "#d8cfaf"}>
        <HorizontalCenter>
          <TitleWrapper>
            <TitleNavBar
              title={techChecked ? "Tech Jobs" : "All Jobs"}
              showCode={this.showCode}
            />
          </TitleWrapper>
          <CheckboxWrapper>
            <label>
              <Checkbox
                checked={techChecked}
                onChange={this.handleCheckboxChange}
                text={"tech only"}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <Checkbox
                checked={plainResumeChecked}
                onChange={this.handleCheckboxChangeResumeStyle}
                text={"plain resume"}
              />
            </label>
          </CheckboxWrapper>
        </HorizontalCenter>

        {this.state.showCode ? (
          <PrismCode code={code} />
        ) : !this.state.plainResumeChecked ? (
          <FlexRow>
            <FlexElement />
            <FlexElement minWidth="95">
              <CollapsibleCard
                data={workHistoryData}
                showOnlyTech={techChecked}
              />
            </FlexElement>
            <FlexElement />
          </FlexRow>
        ) : (
          <PlainResume data={workHistoryData} showOnlyTech={techChecked} />
        )}
      </FullPage>
    );
  }
}
export default WorkHistory;
