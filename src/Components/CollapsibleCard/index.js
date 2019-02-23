import React, { Component } from "react";
import Collapsible from "../Collapsible";
import {
  Blurb,
  Subtitle,
  Card,
  FlexElement,
  FlexRow
} from "./style";
import "./styles.css";
import styled, { keyframes } from "styled-components";

import { BaseAnimation } from "animate-css-styled-components";

const SlideOutDownAnimation = keyframes`
from {
  transform: translate3d(150%, 0, 0);
}

to {
  transform: translate3d(0, 0, 0);
}
`;

const SlideOutDownNew = styled(BaseAnimation)`
  animation-name: ${SlideOutDownAnimation};
`;

const Sub = ({ text }) => (
  <FlexRow>
    <FlexElement />
    <FlexElement >
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

  componentDidUpdate() {
    !this.state.animationHasPlayed &&
      this.setState({ animationHasPlayed: true });
  }

  FinishedCard(index, animationHasPlayed, item) {
    return (
      <SlideOutDownNew
        delay={`${index / 20}s`}
        duration={animationHasPlayed ? "0" : ".8s"}
      >
        <Collapsible trigger={item.company.name}  >
          <Card >
            <div style={{ height: 12 }} />
            <Sub text={"Description"} />
            <Blurb> {item.company.description}</Blurb>
            <Sub text={"Role"} />

            {item.role.map((item, index) => {
              return (
                <Blurb>
                  <li style={{marginTop:'12px'}}>{item}</li>
                </Blurb>
              );
            })}

            {item.tech && (
              <div>
                <Sub text={"Tech"}/>
                <Blurb>
                  {item.tech.map((item, index) => {
                    return <li>{item}</li>;
                  })}
                </Blurb>
              </div>
            )}
            <div style={{height:'40px'}}/>
          </Card>
        </Collapsible>
      </SlideOutDownNew>
    );
  }

  render() {
    const { data, showOnlyTech } = this.props;
    const { animationHasPlayed } = this.state;
    console.log(this.props);
    return (
      <>
        {data.map((item, index) => {
          if (!showOnlyTech) {
            return this.FinishedCard(index, animationHasPlayed, item);
          } else if (item.tech) {
            return this.FinishedCard(index, animationHasPlayed, item);
          }
        })}
        <div style={{height:'40px'}}/>
      </>
    );
  }
}
export default CollapsibleCard;

