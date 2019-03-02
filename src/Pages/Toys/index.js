import React, { Component } from "react";
import { FullPage } from "./style.js";
import Marble from "./SpecificToys/Marble"

class Toys extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  

  }

  render() {
    return (
      <FullPage background={'white'}>
      <Marble />
      </FullPage>
    );
  }
}
export default Toys;
