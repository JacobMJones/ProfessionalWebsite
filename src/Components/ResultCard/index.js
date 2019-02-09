import React, { Component } from "react";

import { StyledLink, Card, Title, Blurb, HorizontalCenter } from "./style";

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, link, blurb } = this.props;

    return (
      <HorizontalCenter>
        <Card>
          <Title>{title}</Title>
          <Blurb> {blurb}</Blurb>

          <StyledLink as="a" href={link && link.url}>
            {link && link.name}
          </StyledLink>
        </Card>
      </HorizontalCenter>
    );
  }
}
export default ResultCard;
