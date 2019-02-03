import React, { Component } from "react";
import posed from 'react-pose';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { FullPage, FlexElement, FlexRow, FlexColumn, AllCenter } from "./style";

class RandomPolygons extends Component {
  constructor(props){
    super(props)
    this.state = {visible:false}
  }
  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ visible:!this.state.visible}, ()=>{console.log(this.state)}), 900, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  make = () => {};

  render() {
    const { visible } = this.state;
    return (
      <FullPage
      pose={visible ? 'visible' : 'hidden'}       
      >
        <FlexRow>
          {Array(this.getRandomNumber() + 1)
            .fill()
            .map(() => {
              return (
                <FlexElement flexSize={this.getRandomNumber()}>
                  <FlexColumn>
                    {Array(this.getRandomNumber())
                      .fill()
                      .map(() => {
                        return (
                          <FlexElement
                            background={this.getRandomColor()}
                            flexSize={this.getRandomNumber()}
                            borderRadius={this.getRandomNumber()}
                          />
                        );
                      })}
                  </FlexColumn>
                </FlexElement>
              );
            })}
        </FlexRow>
      </FullPage>
    );
  }
}

export default RandomPolygons;
