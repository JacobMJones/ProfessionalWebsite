import React, { Component } from "react";
import SceneManager from "./SceneManager";
import Canvas from "../../../../Components/ThreeJSCanvas";

class Marble extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = 400;
    const height = 400;
    const canvasOptions = {
      height,
      width,
      backgroundColor: "red"
    };
    return (
      <div>
        <div>
          <Canvas canvasOptions={canvasOptions} SceneManager={SceneManager} />
        </div>
      </div>
    );
  }
}
export default Marble;
