import React, { Component } from "react";
import threeJSCanvas from "./threeJsCanvas";

class ThreeJSCanvas extends Component {
  constructor(props) {
    super(props);
  }


  //this is only called once on mount
  componentDidMount() {

  
    threeJSCanvas(
      this.threeRootElement,
      this.props.SceneManager,
      this.props.canvasOptions,
      this.props.sceneOptions, 
      this.props.subjects,
      this.props.clickCallback
    );
  }

  render() {
    return (
        <div ref={element => (this.threeRootElement = element)} />  
    );
  }
}
export default ThreeJSCanvas;
