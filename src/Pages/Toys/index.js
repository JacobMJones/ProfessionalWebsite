import React, { Component } from "react";
import { FullPage } from "./style.js";
import Marble from "./SpecificToys/Marble"
import ThreeJSWrapper  from '../../Components/ThreeJSWrapper'
class Toys extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  

  }

  render() {
    return (
      <FullPage background={'white'}>
      <ThreeJSWrapper/>
      </FullPage>
    );
  }
}
export default Toys;
