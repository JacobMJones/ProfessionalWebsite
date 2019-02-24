import React, { Component } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import "../../Theme/prism.css";
import {} from "./style";
import notesData from "../../Constants/notesData.js";
class SpeedRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasShownTitle: false,
      wordToShow: "",
      textToShow: ["hello", "my", "friend"],
      wordIndex: -1,
      noteIndex: 0,
      speed: 300,
      counter: null
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
      if (wordIndex === -1) {
        this.setState(prevState => ({
          showTitle: true,
          wordToShow: textToShow[noteIndex].title,
          wordIndex:0
        }));
      } else {
        this.setState(prevState => ({
          wordIndex: prevState.wordIndex + 1,
          wordToShow: word,
          showTitle: false,
        }));
      }
    } else {
      this.setState(prevState => ({
        noteIndex: prevState.noteIndex + 1,
        showTitle: false,
        wordIndex: -1,
    
      }));
    }
  };

  startCountDown = () => {
    this.timerID = setInterval(() => this.showWord(), 300);
  };

  stopCountDown = () => {
    clearInterval(this.timerID);
    this.prepareText();
    this.setState({ wordIndex: -1, noteIndex: 0, wordToShow: "waiting...", showTitle:false });
  };

  render() {
    const { wordToShow, showTitle } = this.state;
    return (
      <div>
        <div style={showTitle ? {fontSize:40} : {fontSize:20}}>{wordToShow}</div>
        <button
          onClick={() => {
            this.startCountDown();
          }}
        >
          Begin
        </button>
        <button
          onClick={() => {
            this.stopCountDown();
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}
export default SpeedRead;
