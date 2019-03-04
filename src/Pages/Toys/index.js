import React, { Component } from "react";
import { FullPage, FlexRow, FlexColumn, FlexElement } from "./style.js";
import Marble from "./SpecificToys/Marble"
import ThreeJSWrapper from '../../Components/ThreeJSWrapper'
class Toys extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false }
  }

  componentDidMount() {


  }
  clickHandler = () => {
    console.log('clicked')
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }
  render() {
    return (
      <FullPage background={'white'}>
        <FlexRow><button onClick={() => { this.clickHandler() }}>Change</button></FlexRow>
        <FlexRow> {this.state.clicked && <ThreeJSWrapper />}</FlexRow>

      </FullPage>
    );
  }
}
export default Toys;
