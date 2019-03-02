import React, { Component } from "react";
import { FullPage } from "./style.js";
import threeEntryPoint from "./threeEntryPoint";
import threeEntryPoint2 from "./threeEntryPoint";
import threeEntryPoint3 from "./threeEntryPoint";
class Toys extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
    // threeEntryPoint2(this.threeRootElement2);
  }

  render() {
    return (
      <FullPage background={"white"}>
        <div style={{ position: "relative", textAlign:'center' }}>
          <div
            style={{ width: '400px', height: '400px', position:'absolute', left:50, top:0 }}
            ref={element => (this.threeRootElement = element)}
          />

          <div
            style={{ fontSize: 40, position: "absolute", top: 50, left: 50 }}
          >
           T O Y S
          </div>
        </div>
        {/* <div style={{width:500, height:500}} ref={element => (this.threeRootElement2 = element)} /> */}
      </FullPage>
    );
  }
}
export default Toys;
