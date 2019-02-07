import React, { Component } from "react";


import { StyledLink, Card, Title, Blurb, HorizontalCenter } from "./style";

class WhatIKnow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, link, blurb } = this.props;
    const { url, name } = link;
    return (
      <HorizontalCenter>
      <Card>
        <Title>{title}</Title>
        <Blurb> {blurb}</Blurb>

        <StyledLink as="a" href={url}>
          {name}
        </StyledLink>
      </Card>
      </HorizontalCenter>
    );
  }
}
export default WhatIKnow;
