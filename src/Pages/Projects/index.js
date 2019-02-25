import React, { Component } from "react";
import { FullPage, HorizontalCenter, TitleWrapper } from "./style.js";
import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";
import codeData from "../../Constants/codeData";
import projectData from './projectsData'
import TitleNavBar from "../../Components/TitleNavBar";
import Cards from "../../Components/Cards"
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }
  componentDidMount() {
    const arrayOfCode = [];
    codeData.ProjectsCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }
  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    return (
      <FullPage background="#829356">
        <HorizontalCenter>
          <TitleWrapper>
            <TitleNavBar
              title="Projects"
              showCode={this.showCode}
              flip={this.state.showCode}
            />
          </TitleWrapper>
          {!this.state.showCode ? (
          <Cards data={projectData}/>
          ) : (
            <PrismCode code={this.state.code} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
