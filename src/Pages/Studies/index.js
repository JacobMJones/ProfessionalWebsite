import React, { Component } from "react";
import { withData } from "../../Components/Data/data";
import { FlipInX } from "animate-css-styled-components";
import { AwesomeButton } from "react-awesome-button";
import TitleNavBar from "../../Components/TitleNavBar";
import codeData from "../../Constants/codeData";
import PrismCode from "../../Components/PrismCode";
import getCode from "../../Functions/getCode.js";
import { Redirect } from "react-router";
import {
  FlexElement,
  FlexRow,
  HorizontalCenter,
  FullPage,
  TitleWrapper,
  ButtonText
} from "./style";

const deskButton = {
  width: "40vw",
  height: "20vh",
  marginTop: "20px"
};
const mobileButton = {
  width: "80vw",
  height: "20vh",
  marginTop: "12px"
};
class Studies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCode: false,
      code: []
    };
  }

  componentDidMount() {
    const arrayOfCode = [];
    codeData.StudiesCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }
  showCode = () =>
    this.setState(prev => {
      return {
        showCode: !prev.showCode
      };
    });

  render() {
    const { code } = this.state;
    const screenSize = window.innerWidth;
    const { studiesButtonData } = this.props.data;
    const flipSpeed = "1s";
    const { animationDirection } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.url} push />;
    }
    return (
      <FullPage>
        <HorizontalCenter>
          <TitleWrapper>
            <TitleNavBar
              title="Studies"
              showCode={this.showCode}
              flip={this.state.showCode}
            />
          </TitleWrapper>
        </HorizontalCenter>
        <HorizontalCenter>
          {this.state.showCode ? (
            <PrismCode code={code} />
          ) : (
            <>
              {studiesButtonData.map((item, index) => {
                return (
                  <FlexElement key={`landing-button${index}`}>
                    <FlipInX direction={animationDirection} duration={0}>
                      <AwesomeButton
                        action={() => {
                          this.setState(
                            { animationDirection: "reverse" },
                            () => {
                              setTimeout(() => {
                                this.setState({
                                  url: item.path,
                                  redirect: true
                                });
                              }, 0);
                            }
                          );
                        }}
                        style={screenSize > 600 ? deskButton : mobileButton}
                      >
                        <ButtonText> {item.title}</ButtonText>
                      </AwesomeButton>
                    </FlipInX>
                  </FlexElement>
                );
              })}
            </>
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default withData(Studies);
