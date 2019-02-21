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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  async componentDidMount() {
    let code = await getCode();
    this.setState({ message: code });
  }
  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    const screenWidth = window.innerWidth;
    return (
      <FullPage background="#d8cfaf">
        <HorizontalCenter>
          <FlexRow>
            <NavButtonWrapper>
              <HomeButton />
            </NavButtonWrapper>
            <FlexElement>
              <ActionTitle text="Projects" fontSize={4} />
            </FlexElement>
            <NavButtonWrapper textAlign="left">
              <CodeButton functionToCall={this.showCode} />
            </NavButtonWrapper>
          </FlexRow>
          <div style={{ height: "40px" }} />
          {!this.state.showCode ? (
            <ProjectCard />
          ) : (
            <PrismCode code={this.state.message} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
