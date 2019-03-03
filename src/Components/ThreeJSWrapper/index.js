import React, { Component } from "react";
import SceneManager from "../ThreeJSSceneManager";
import Canvas from "../ThreeJSCanvas";

class ThreeJSWrapper extends Component {
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
    const sceneOptions = {
     // cameraPositionZ: 40
    };
    return (
      <div>
        <div>
          <Canvas
            canvasOptions={canvasOptions}
            SceneManager={SceneManager}
            sceneOptions={sceneOptions}
          />
        </div>
        
      </div>
    );
  }
}
export default ThreeJSWrapper;


// const sceneOptions = {
//   cameraPositionZ: 40
//  };