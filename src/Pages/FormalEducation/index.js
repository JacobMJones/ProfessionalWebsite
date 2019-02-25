import React, { Component } from "react";
import { FullPage, HorizontalCenter, TitleWrapper } from "./style.js";
import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";
import codeData from "../../Constants/codeData";
import educationData from "./EducationData"
import TitleNavBar from "../../Components/TitleNavBar";
import EducationCard from './EducationCard'
import Cards from '../../Components/Cards'
class FormalEducation extends Component {
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
      <FullPage background="#CD594A">
        <HorizontalCenter>
          <TitleWrapper>
            <TitleNavBar
              title="Formal Education"
              long={true}
              showCode={this.showCode}
              flip={this.state.showCode}
              backArrow={true}
            />
          </TitleWrapper>
          {!this.state.showCode ? (
            <Cards data={educationData}/>
          ) : (
            <PrismCode code={this.state.code} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default FormalEducation;
