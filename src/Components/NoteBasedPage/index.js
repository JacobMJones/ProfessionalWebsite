import React, { Component } from "react";
import { FullPage, HorizontalCenter, TitleWrapper } from "./style.js";
import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";

import TitleNavBar from "../../Components/TitleNavBar";
import Cards from "../../Components/Cards"

class NoteBasedPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    return (
      <FullPage background={this.props.backgroundColor}>
        <HorizontalCenter>
          <TitleWrapper>
            <TitleNavBar
              title={this.props.title}
              showCode={this.showCode}
              flip={this.state.showCode}
              backArrow={this.props.backArrow}
            />
          </TitleWrapper>
          {!this.state.showCode ? (
          <Cards data={this.props.data}/>
          ) : (
            <PrismCode code={this.props.code} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default NoteBasedPage;
