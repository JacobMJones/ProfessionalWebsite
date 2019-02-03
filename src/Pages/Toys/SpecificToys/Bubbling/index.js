import React, { Component } from "react";
import posed from "react-pose";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FullPage, FlexElement, FlexRow, FlexColumn, AllCenter } from "./style";
import "../../index.css";
class Bubbling extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, backgroundColor: "lightblue" };
  }
  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // getRandomNumber = () => {
  //   return Math.floor(Math.random() * 10 + 1);
  // };

  // componentDidMount() {
  //   this.interval = setInterval(
  //     () =>
  //       this.setState({ visible: !this.state.visible }, () => {
  //         console.log(this.state);
  //       }),
  //     900,
  //     100
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  make = () => {};

  changeBackgroundColor = () => {};
  render() {
    const { visible } = this.state;
    return (
      <FullPage background={this.state.backgroundColor}>
        <AllCenter>
          <div style={{ fontSize: "2em", textAlign: "center" }}>
            <button
              value="Inset Border"
              onMouseDown={() => {
                this.setState({ backgroundColor: this.getRandomColor() });
              }}
              onMouseUp={() => {
                this.setState({ backgroundColor: this.getRandomColor() });
              }}
            />
          </div>
        </AllCenter>
      </FullPage>
    );
  }
}

export default Bubbling;
