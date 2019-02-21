import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Redirect } from "react-router";
import ActionTitle from "../../Components/ActionTitle";
import "react-awesome-button/dist/styles.css";
import { withData } from "../../Components/Data/data";
import { FlipInX } from "animate-css-styled-components";
import {
  FullPage,
  FlexElement,
  FlexColumn,
  HorizontalCenter,
  ButtonText,
  Title
} from "./style.js";

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
    const { animationDirection } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.url} push />;
    }
    return (
      <FullPage>
        <HorizontalCenter>
          <FlipInX duration={0}>
            <ActionTitle
              text="Jacob Jones"
              fontSize={screenSize < 800 ? 3.5 : 4.5}
            />
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
                            ? {
                                width: "80vw",
                                height: "20vh",
                                marginTop: "12px"
                              }
                            : screenSize < screenSizeDesktop
                            ? {
                                width: "40vw",
                                height: "20vh",
                                marginTop: "20px"
                              }
                            : {
                                width: "40vw",
                                height: "20vh",
                                marginTop: "20px"
                              }
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
                            ? {
                                width: "80vw",
                                height: "20vh",
                                marginTop: "12px"
                              }
                            : screenSize < screenSizeDesktop
                            ? {
                                width: "40vw",
                                height: "20vh",
                                marginTop: "20px"
                              }
                            : {
                                width: "40vw",
                                height: "20vh",
                                marginTop: "20px"
                              }
                        }
                      >
                        <ButtonText> {item.title}</ButtonText>
                      </AwesomeButton>
                    </FlipInX>
                  </FlexElement>
                );
              })}
            {/* <Title fontSize={24}>....under construction...</Title> */}
          </FlexColumn>
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default withData(Landing);
