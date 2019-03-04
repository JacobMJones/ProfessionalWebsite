import React, { Component } from "react";
import getCode from "../../Functions/getCode.js";
import codeData from "../../Constants/codeData";
import recentData from "./recentData";

import { FullPage, HorizontalCenter, TitleWrapper } from "./style.js";
import NoteBasedPage from "../../Components/NoteBasedPage";
class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const arrayOfCode = [];
    codeData.RecentCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }

  render() {
    return (
      <NoteBasedPage
        title={"Recent"}
        backArrow={true}
        code={this.state.code}
        data={recentData}
        backgroundColor="#829356"
        blurb="This is what I am currently studying, and what I just finished focusing on."
      />
    );
  }
}
export default Recent;
