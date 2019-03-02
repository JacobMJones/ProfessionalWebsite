import React, { Component } from "react";
import SceneManager from "./SceneManager";
import Canvas from "../../../../Components/ThreeJSCanvas";


const canvasOptions = {height:1000, width:1000}
class Marble extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Canvas options={canvasOptions} SceneManager={SceneManager} />;
  }
}
export default Marble;
