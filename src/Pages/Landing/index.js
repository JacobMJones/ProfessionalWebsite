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
    const { animationDirection } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.url} push />;
    }
    return (
      <FullPage>
        <HorizontalCenter>
          <Title fontSize={3.5} >Jacob Jones</Title>
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
                        style={screenSize > 600 ? deskButton : mobileButton}
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
                        style={screenSize > 600 ? deskButton : mobileButton}
                      >
                        <ButtonText> {item.title}</ButtonText>
                      </AwesomeButton>
                    </FlipInX>
                  </FlexElement>
                );
              })}
          </FlexColumn>
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default withData(Landing);
