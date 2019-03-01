import React, { Component } from "react";
import Collapsible from "../Collapsible";
import { Blurb, Subtitle, Card, FlexElement, FlexRow } from "./style";
import "./styles.css";
import styled, { keyframes } from "styled-components";

import { BaseAnimation } from "animate-css-styled-components";

const SlideInLeftAnimation = keyframes`
from {
  transform: translate3d(150%, 0, 0);
}

to {
  transform: translate3d(0, 0, 0);
}
`;

const SlideInLeft = styled(BaseAnimation)`
  animation-name: ${SlideInLeftAnimation};
`;

const Sub = ({ text }) => (
  <FlexRow>
    <FlexElement />
    <FlexElement>
      <Subtitle>{text}</Subtitle>
    </FlexElement>
    <FlexElement />
  </FlexRow>
);

class CollapsibleCard extends Component {
  constructor(props) {
    super(props);
    this.state = { startPosition: -1, animationHasPlayed: false };
  }

  FinishedCard(index, item) {
    return (
      <SlideInLeft
        delay={this.props.hasPlayed ? 0 : `${index / 20}s`}
        duration={this.props.hasPlayed ? "0" : ".8s"}
      >
        <Collapsible trigger={item.company.name}>
          <Card>
            <div style={{ height: 12 }} />
            <Sub text={"Description"} />
            <Blurb> {item.company.description}</Blurb>
            <Sub text={"Role"} />

            {item.role.map((item, index) => {
              return (
                <Blurb>
                  <li style={{ marginTop: "12px" }}>{item}</li>
                </Blurb>
              );
            })}

            {item.tech && (
              <div>
                <Sub text={"Tech"} />
                <Blurb>
                  {item.tech.map(item => (
                    <li>{item}</li>
                  ))}
                </Blurb>
              </div>
            )}
            <div style={{ height: "40px" }} />
          </Card>
        </Collapsible>
      </SlideInLeft>
    );
  }

  render() {
    const { data, showOnlyTech } = this.props;

    return (
      <>
        {data.map((item, index) => {
          if (!showOnlyTech) {
            return this.FinishedCard(index, item);
          } else if (item.tech) {
            return this.FinishedCard(index, item);
          }
        })}
        <div style={{ height: "40px" }} />
      </>
    );
  }
}
export default CollapsibleCard;
