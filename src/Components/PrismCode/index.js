import React, { Component } from "react";
import Parser from "html-react-parser";
import Prism from "prismjs";
import PrismJsx from 'prismjs/components/prism-jsx.min';
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
          <code className="language-jsx" style={{}}>
       {code}
          </code>
        </pre>
      </div>
    );
  }
}
export default PrismCode;
{/* <div className="Container" dangerouslySetInnerHTML={{__html: 
        someHtml}}></div> */}