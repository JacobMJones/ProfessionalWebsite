import React, { Component } from "react";
import Animated, {
  FadeAnimations,
  RotateAnimations
} from "animated-styled-components";
import styled, { ThemeProvider } from "styled-components";

import {
  FullPage,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter
} from "../../Theme/globalStyle.js";
import { Box } from "./style";
import posed from "react-pose";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
class Toys extends Component {
  constructor(props) {
    super(props);
    this.state = { borderRadius:50 };
  }
  state = { pose: "top" };

  handleClick = () => {
    this.setState({
      pose: this.state.pose === "top" ? "bottom" : "top"
      // y: getRandomArbitrary(0,window.innerHeight/8)
    });
    this.forceUpdate();
  };

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  render() {
    console.log("scale value", this.state.scaleValue);
    return (
      <FullPage background={this.state.backgroundColor}>
        <Box borderRadius={this.state.borderRadius} onClick={()=>{this.setState({borderRadius:getRandomArbitrary(4,100)})}} >
          Click Here to slideOutUp
        </Box>
      </FullPage>
      //
    );
  }
}
export default Toys;

// export default class extends React.Component {
//   state = { isActive: true };
//   click = () => {
//     this.setState({ isActive: false });
//   };
//   render() {
//     return (
//       <h1>
//         <MyComponent onClick={this.click} isActive={this.state.isActive}>
//           Click Here to slideOutUp
//         </MyComponent>
//         Hello!
//       </h1>
//     );
//   }
// }
