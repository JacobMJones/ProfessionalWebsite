import React, { Component } from "react";
import whatIKnowData from "./whatIKnowData"
import styled, { ThemeProvider } from "styled-components";
import Search from '../../Components/Search/index'
import {
  FullPage,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter,
  Title,
  Blurb
} from "../../Theme/globalStyle.js";
import "../../index.css";



class WhatIKnow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <FullPage background={this.state.backgroundColor}>
        <AllCenter top={40}>
          <Title>My Notes</Title>

          <FlexRow>
            <Blurb>
              Reminders, code snippets, and explanations of key dev concepts. I
              write these to remember and for when I forget.
            </Blurb>
           
          </FlexRow>
          <Search list={whatIKnowData}/>
        </AllCenter>
      </FullPage>
    );
  }
}
export default WhatIKnow;
