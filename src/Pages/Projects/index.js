import React, { Component } from "react";
import {
  FullPage,
  HorizontalCenter,
} from "./style.js";
import ProjectCard from "./ProjectCard";

import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";
import codeData from "../../Constants/codeData";
import TitleNavBar from "../../Components/TitleNavBar";
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
          <div style={{ marginTop: 50, marginBottom:50 }}>
            <TitleNavBar
              title="Projects"
              showCode={this.showCode}
              flip={this.state.showCode}
            />
          </div>
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
