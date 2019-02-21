import React, { Component } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import "../../Theme/prism.css";
import { CodePage, Pre, CodeWrapper } from "./style";
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
      <CodePage>
        <CodeWrapper>
          <Pre>
            <code className="language-jsx">{code}</code>
          </Pre>
        </CodeWrapper>
      </CodePage>
    );
  }
}
export default PrismCode;
