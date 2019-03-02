import React, { Component } from "react";
import SceneManager from "./SceneManager";
import Canvas from "../../../../Components/ThreeJSCanvas";

class Marble extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = window.innerWidth;
    const height = 400;
    const canvasOptions = {
      height,
      width,
      backgroundColor:'red'
    };
    return <Canvas canvasOptions={canvasOptions} SceneManager={SceneManager} />;
  }
}
export default Marble;
