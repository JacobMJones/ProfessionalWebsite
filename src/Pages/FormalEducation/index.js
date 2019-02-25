import React, { Component } from "react";
import getCode from "../../Functions/getCode.js";
import codeData from "../../Constants/codeData";
import educationData from "./EducationData";
import NoteBasedPage from "../../Components/NoteBasedPage";

class FormalEducation extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }
  componentDidMount() {
    const arrayOfCode = [];
    codeData.FormalEducationCode.forEach(async function(element) {
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
      <NoteBasedPage
        title={"Formal Education"}
        code={this.state.code}
        data={educationData}
        backgroundColor="#cd594a"
      />
    );
  }
}
export default FormalEducation;
