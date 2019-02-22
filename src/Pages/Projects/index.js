import React, { Component } from "react";
import {
  FullPage,
  HorizontalCenter,
  NavButtonWrapper,
  FlexElement,
  FlexRow
} from "./style.js";
import ProjectCard from "./ProjectCard";
import ActionTitle from "../../Components/ActionTitle";
import HomeButton from "../../Components/HomeButton";
import CodeButton from "../../Components/CodeButton";
import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";
import codeData from "../../Constants/codeData";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  async componentDidMount() {
    let arrayOfCode = [];
    codeData.ProjectsCode.forEach(async function(element) {
      let code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode }, () => {
      console.log(this.state);
    });
  }
  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    return (
      <FullPage background="#d8cfaf">
        <HorizontalCenter>
          <FlexRow>
            <NavButtonWrapper textAlign="right">
              <HomeButton />
            </NavButtonWrapper>
            <FlexElement minWidth={30}>
              <ActionTitle text="Projects" fontSize={3.5} />
            </FlexElement>
            <NavButtonWrapper textAlign="left">
              <CodeButton
                functionToCall={this.showCode}
                image={
                  this.state.showCode ? "images/page.png" : "/images/code.png"
                }
              />
            </NavButtonWrapper>
          </FlexRow>
          <div style={{ height: "40px" }} />
          {!this.state.showCode ? (
            <ProjectCard />
          ) : (
            <PrismCode code={this.state.code} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
