import React, { Component } from "react";
import whatIKnowData from "../whatIKnowData";
import styled, { ThemeProvider } from "styled-components";

import { StyledLink, Card, Title, Blurb } from "./style";

class WhatIKnow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, link, blurb } = this.props;
    const { url, name } = link;
    return (
      <Card>
        <Title>{title}</Title>
        <Blurb> {blurb}</Blurb>

        <StyledLink as="a" href={url}>
          {name}
        </StyledLink>
      </Card>
    );
  }
}
export default WhatIKnow;
