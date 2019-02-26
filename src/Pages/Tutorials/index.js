import React, { Component } from "react";
import getCode from "../../Functions/getCode.js";
import codeData from "../../Constants/codeData";
import tutorialsData from "./tutorialsData";
import NoteBasedPage from "../../Components/NoteBasedPage";

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  async componentDidMount() {
    const arrayOfCode = [];
    codeData.TutorialsCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }

  render() {
    return (
      <NoteBasedPage
        title={"Tutorials"}
        code={this.state.code}
        data={tutorialsData}
        backgroundColor="#cd594a"
        blurb="I have gone through countless articles and tutorials. The lessons below are the ones that have influenced me the most."   
      />
    );
  }
}
export default Tutorials;
