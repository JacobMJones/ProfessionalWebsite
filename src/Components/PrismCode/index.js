import React, { Component } from "react";

import Prism from "prismjs";
import "../../Theme/prism.css";
class PrismCode extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code } = this.props;
    return (
      <div style={{ maxWidth: "95vw", marginLeft: "2.5vw" }}>
        <pre
          style={{
            textAlign: "left",
            maxWidth: "90vw"
          }}
        >
          <code className="language-javascript" style={{}}>
            {code}
          </code>
        </pre>
      </div>
    );
  }
}
export default PrismCode;
