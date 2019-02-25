import React, { Component } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import {
  FullPage,
  HorizontalCenter,
  TitleWrapper,
  FlexColumn,
  FlexElement,
  FlexRow,
  AllCenter
} from "./style.js";
import { AwesomeButton } from "react-awesome-button";
import TitleNavBar from "../../Components/TitleNavBar";
import "../../Theme/prism.css";

import notesData from "../../Constants/notesData.js";

class SpeedRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingWords: false,
      hasShownTitle: false,
      wordToShow: "",
      textToShow: [],
      wordIndex: -4,
      noteIndex: 0,
      speed: 200
    };
  }

  componentDidMount() {
    Prism.highlightAll();
    this.prepareText();
  }

  prepareText = () => {
    const preparedText = [];
    notesData.forEach((note, index) => {
      const title = note.name;
      const blurb = note.blurb.split(" ");
      preparedText.push({ title, blurb });
      if (index === notesData.length - 1) {
        this.setState({
          textToShow: preparedText.sort((a, b) => 0.5 - Math.random())
        });
      }
    });
  };

  showWord = () => {
    const { textToShow, wordIndex, noteIndex } = this.state;

    const word = textToShow[noteIndex].blurb[this.state.wordIndex];
    if (wordIndex !== textToShow[noteIndex].blurb.length) {
      if (wordIndex < 0) {
        this.setState(prevState => ({
          showTitle: true,
          wordToShow: textToShow[noteIndex].title,
          wordIndex: prevState.wordIndex + 1
        }));
      } else {
        this.setState(prevState => ({
          wordIndex: prevState.wordIndex + 1,
          wordToShow: word,
          showTitle: false
        }));
      }
    } else {
      this.setState(prevState => ({
        noteIndex: prevState.noteIndex + 1,
        showTitle: false,
        wordIndex: -4
      }));
    }
  };

  startCountDown = () => {
    this.timerID = setInterval(() => this.showWord(), this.state.speed);
    this.setState({ isShowingWords: true });
  };

  stopCountDown = () => {
    clearInterval(this.timerID);
    this.prepareText();
    this.setState({
      wordIndex: -4,
      noteIndex: 0,
      wordToShow: "Let's learn!",
      showTitle: false,
      isShowingWords: false
    });
  };
  sliderChanged = e => {
    this.setState({ speed: parseInt(e.target.value) });
  };

  render() {
    const { wordToShow, showTitle, isShowingWords } = this.state;
    return (
      <FullPage background={isShowingWords ? "white" : "#cd594a"}>
        <HorizontalCenter>
          <TitleWrapper>
            {!isShowingWords ? (
              <TitleNavBar
                title="Speed"
                showCode={this.showCode}
                flip={this.state.showCode}
                color={"white"}
              />
            ) : (
              <div
                style={
                  window.innerWidth < 601
                    ? { minHeight: "16.5vh" }
                    : { minHeight: "6.2vh" }
                }
              />
            )}
          </TitleWrapper>

          <FlexColumn>
            <FlexElement minHeight={window.innerWidth < 600 ? 30 : 60}>
              <AllCenter>
                <div
                  style={
                    showTitle
                      ? { fontSize: 50, color: "green" }
                      : { fontSize: 50 }
                  }
                >
                  {wordToShow}
                </div>
              </AllCenter>
            </FlexElement>
            <FlexElement>
              <div style={{ width: "100vw", marginTop:'50px' }}>
                {isShowingWords ? (
                  <AwesomeButton
                    style={
                      window.innerWidth > 600
                        ? { width: "200px", marginLeft: -32 }
                        : { width: "200px" }
                    }
                    action={() => {
                      this.stopCountDown();
                    }}
                  >
                    Stop
                  </AwesomeButton>
                ) : (
                  <AwesomeButton
                    style={
                      window.innerWidth > 600
                        ? { width: "200px", marginLeft: -32 }
                        : { width: "200px" }
                    }
                    action={() => {
                      this.startCountDown();
                    }}
                  >
                    Start
                  </AwesomeButton>
                )}
              </div>
            </FlexElement>
            <FlexElement>
              {!isShowingWords && (
                <input
                  className="slider"
                  type="range"
                  min="100"
                  max="300"
                  value={this.state.speed}
                  onChange={this.sliderChanged}
                  step="1"
                  style={{ direction: "rtl", width: "250px" }}
                />
              )}
            </FlexElement>
          </FlexColumn>
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default SpeedRead;
