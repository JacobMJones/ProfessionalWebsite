import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Redirect } from "react-router";
import "react-awesome-button/dist/styles.css";
import { withData } from "../../Components/Data/data";
import { FlipInX } from "animate-css-styled-components";
import {
  FullPage,
  FlexElement,
  FlexColumn,
  AllCenter,
  ButtonText,
  Title
} from "../../Theme/globalStyle.js";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDirection: "normal",
      redirect: false
    };
  }

  render() {
    const screenSize = window.innerWidth;
    const { landingButtonData } = this.props.data;
    const flipSpeed = "1s";
    const screenSizeMobile = 800;
    const screenSizeDesktop = 1200;
    const { animationDirection, redirect } = this.state;

    if (this.state.redirect) {
      return <Redirect push to={this.state.url} />;
    }
    return (
      <FullPage>
        <AllCenter>
          <FlipInX duration="0">
            <Title>Jacob M Jones</Title>
          </FlipInX>
          <FlexColumn>
            {animationDirection === "normal" &&
              landingButtonData.map((item, index) => {
                return (
                  <FlexElement key={`landing-button${index}`}>
                    <FlipInX
                      direction={animationDirection}
                      duration={flipSpeed}
                    >
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
                              }, 1000);
                            }
                          );
                        }}
                        style={
                          screenSize < screenSizeMobile
                            ? { width: "80vw" }
                            : screenSize < screenSizeDesktop
                            ? { width: "32vw" }
                            : { width: "22vw" }
                        }
                      >
                        <ButtonText> {item.title}</ButtonText>
                      </AwesomeButton>
                    </FlipInX>
                  </FlexElement>
                );
              })}
            {animationDirection !== "normal" &&
              landingButtonData.map((item, index) => {
                return (
                  <FlexElement key={`landing-button${index}`}>
                    <FlipInX
                      direction={animationDirection}
                      duration={flipSpeed}
                    >
                      <AwesomeButton
                        style={
                          screenSize < screenSizeMobile
                            ? { width: "80vw" }
                            : screenSize < screenSizeDesktop
                            ? { width: "32vw" }
                            : { width: "22vw" }
                        }
                      >
                        <ButtonText> {item.title}</ButtonText>
                      </AwesomeButton>
                    </FlipInX>
                  </FlexElement>
                );
              })}
          </FlexColumn>
        </AllCenter>
      </FullPage>
    );
  }
}
export default withData(Landing);
