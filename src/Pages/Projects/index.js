import React, { Component } from "react";
import getCode from "../../Functions/getCode.js";
import codeData from "../../Constants/codeData";
import projectData from "./projectsData";
import NoteBasedPage from "../../Components/NoteBasedPage";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  async componentDidMount() {
    const arrayOfCode = [];
    codeData.ProjectsCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }

  render() {
    return (
      <NoteBasedPage
        title={"Projects"}
        code={this.state.code}
        data={projectData}
        backgroundColor="#829356"
      />
    );
  }
}
export default Projects;
