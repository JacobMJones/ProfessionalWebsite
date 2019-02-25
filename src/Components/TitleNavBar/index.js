import React, { Component } from "react";
import { FlexElement, Title, FlexElementTitle, FlexRow } from "./style.js";
import HomeButton from "../../Components/HomeButton";
import CodeButton from "../../Components/CodeButton";
import BackButton from "../../Components/BackButton";
import "./style.js";

class TitleNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, showCode, flip, color, long, backArrow } = this.props;
    console.log(this.props);
    return (
      <FlexRow>
        <FlexElement>{backArrow ? <BackButton /> : <HomeButton />}</FlexElement>
        <FlexElementTitle>
          <Title color={color} fontSize={3.5}>
            {title}
          </Title>
        </FlexElementTitle>
        <FlexElement>
          <CodeButton
            functionToCall={() => {
              showCode();
            }}
            image={flip ? "images/page.png" : "/images/code.png"}
          />
        </FlexElement>
      </FlexRow>
    );
  }
}
export default TitleNavBar;
