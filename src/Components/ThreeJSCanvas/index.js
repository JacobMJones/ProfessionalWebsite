import React, { Component } from "react";
import threeJSCanvas from "./threeJsCanvas";

class ThreeJSCanvas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    threeJSCanvas(this.threeRootElement, this.props.SceneManager, this.props.options);
  }

  render() {
    return (
      <div
        ref={element => (this.threeRootElement = element)}
      />
    );
  }
}
export default ThreeJSCanvas;
