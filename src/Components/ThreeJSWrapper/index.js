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
      
          <Canvas
            canvasOptions={canvasOptions}
            SceneManager={SceneManager}
            sceneOptions={sceneOptions} 
            subjects={[
              (scene) => new GeneralLights(scene),
              (scene) => new SceneSubject2(scene),
              (scene) => new SceneSubject(scene),          
            ]}
          />
       
    );
  }
}
export default ThreeJSWrapper;
