import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Redirect } from "react-router";
import "react-awesome-button/dist/styles.css";
import { withData } from "../../Components/Data/data";
import { BaseAnimation } from 'animate-css-styled-components';
import Animate, { FlipInX,  Flash,
  Bounce,
  FadeOut,
  FadeIn } from "animate-css-styled-components";
import {
  FullPage,
  FlexElement,
  FlexColumn,
  AllCenter,
  HorizontalCenter,
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
    const windowWidth = window.innerWidth; 
    if (this.state.redirect) {
      return <Redirect push to={this.state.url} />;
    }
    return (
      <FullPage>
        
        <HorizontalCenter>
          <Title marginTop={56}>
            <FlipInX duration={0}>Jacob Jones</FlipInX>
          </Title>
          <FlexColumn style={{marginTop:16}}>
            {animationDirection === "normal" &&
              landingButtonData.map((item, index) => {
                return (
                  <FlexElement  key={`landing-button${index}`}>
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
                            ? { width: "80vw", marginTop:"12px" }
                            : screenSize < screenSizeDesktop
                            ? { width: "40vw", marginTop:"20px" }
                            : { width: "40vw", marginTop:"20px"  }
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
                                ? { width: "80vw", marginTop:"12px" }
                                : screenSize < screenSizeDesktop
                                ? { width: "40vw", marginTop:"20px" }
                                : { width: "40vw", marginTop:"20px"  }
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
          under construction...only notes and resume have content
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default withData(Landing);
