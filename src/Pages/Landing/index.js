import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Redirect } from "react-router";
import "react-awesome-button/dist/styles.css";
import { withData } from "../../Components/Data/data";
import { FlipInX } from "animate-css-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../Theme/light";
import TitleNavBar from "../../Components/TitleNavBar";
import ContactInfo from "../../Components/ContactInfo";

import {
  FullPage,
  NavButton,
  FlexElement,
  FlexColumn,
  HorizontalCenter,
  ButtonText,
  Blurb,
  TitleWrapper,
  ContactWrapper
} from "./style.js";

//These inline styles are needed to work with Awesome Button
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
      redirect: false,
      showContact: false
    };
  }
  showContact = () => {
    this.setState(prevState => {
      return {
        showContact: !prevState.showContact
      };
    });
  };

  render() {
    const screenSize = window.innerWidth;
    const { landingButtonData } = this.props.data;
    const flipSpeed = "1s";
    const { animationDirection, showContact } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.url} push />;
    }
    return (
      <ThemeProvider theme={theme}>
        <FullPage>
          <HorizontalCenter>
            <TitleWrapper>
              <TitleNavBar contactInfo={true} title="Jacob Jones" />
            </TitleWrapper>

            <FlexColumn>
              <HorizontalCenter marginTop="-30px">
                <div>
                  <a
                    href="https://drive.google.com/open?id=1Bl1BVK5X-eCCBf5N4ZTYZuyW1E4mYBP_"
                    download
                  >
                    <NavButton download imgUrl={"/images/Contact/resume.svg"} />
                  </a>

                  <NavButton
                    onClick={() => {
                      this.showContact();
                    }}
                    paddingLeft={"80px"}
                    imgUrl={
                      showContact
                        ? "/images/page-white.png"
                        : "/images/Contact/contact.svg"
                    }
                  />
                </div>
              </HorizontalCenter>
              {this.state.showContact ? (
                <ContactWrapper>
                  <ContactInfo />
                </ContactWrapper>
              ) : (
                animationDirection === "normal" &&
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
                })
              )}
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
      </ThemeProvider>
    );
  }
}
export default withData(Landing);
