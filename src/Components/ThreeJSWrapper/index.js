import React, { Component } from "react";
import SceneManager from "../ThreeJSSceneManager";
import Canvas from "../ThreeJSCanvas";
import GeneralLights from "../ThreeJSLights";
import SceneSubject from '../SceneSubjects/trippy-ball.js'
import SceneSubject2 from '../SceneSubjects/trippy-ball2.js'

class ThreeJSWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = 700;
    const height = 700;
    const canvasOptions = {
      height,
      width,
      backgroundColor: "red"
    };

    const sceneOptions = {
      // cameraPositionZ: 40
    };
  
    return (

      <Canvas
      click={this.props.click}
        canvasOptions={canvasOptions}
        SceneManager={SceneManager}
        sceneOptions={sceneOptions}
        subjects={[
          (scene) => new GeneralLights(scene),
          (scene) => new SceneSubject2(scene),
        ]}
      />

    );
  }
}
export default ThreeJSWrapper;
