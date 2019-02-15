import React, { Component } from "react";
import Accordion from "../Accordion";
import Collapsible from "../Collapsible";
import { Blurb, Subtitle, Card } from "./style";
import "./styles.css";
import styled, { keyframes } from "styled-components";
import { HorizontalCenter } from "../../Theme/globalStyle.js";
import { BaseAnimation } from "animate-css-styled-components";
import Animate, {
  FlipInX,
  Flash,
  Bounce,
  FadeOut,
  FadeIn,
  SlideInUp
} from "animate-css-styled-components";

const SlideOutDownAnimation = keyframes`
from {
  transform: translate3d(150%, 0, 0);
}

to {
  transform: translate3d(0, 0, 0);
}
`;

//extend BaseAnimation component and create
//your custom styled animation
const SlideOutDownNew = styled(BaseAnimation)`
  animation-name: ${SlideOutDownAnimation};
`;

class CollapsableCard extends Component {
  constructor(props) {
    super(props);
    this.state = { startPosition: -1, animationHasPlayed: false };
  }

  componentDidUpdate() {
    !this.state.animationHasPlayed &&
      this.setState({ animationHasPlayed: true });

    //https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
    //
    //  this.setState((state) => ({
    //   animationHasPlayed: !state.animationHasPlayed
    // }));
  }

  FinishedCard(index, animationHasPlayed, item) {
    return (
      <SlideOutDownNew
        delay={`${index / 20}s`}
        duration={animationHasPlayed ? "0" : ".8s"}
      >
        <Collapsible trigger={item.company.name} >
          <HorizontalCenter >
            <Card>
              <div style={{ height: 16 }} />
              <Subtitle>Description</Subtitle>
              <Blurb> {item.company.description}</Blurb>
              <Subtitle>Role</Subtitle>
              {item.role.map((item, index) => {
                return (
                  <Blurb>
                    <li>{item}</li>
                  </Blurb>
                );
              })}
              {item.tech === true && (
                <>
                  <Subtitle>{"Tech"}</Subtitle>
                  <Blurb>
                    {item.tech.map((item, index) => {
                      return <li>{item}</li>;
                    })}
                  </Blurb>{" "}
                </>
              )}
            </Card>
          </HorizontalCenter>
        </Collapsible>
      </SlideOutDownNew>
    );
  }

  render() {
    const { data, showOnlyTech } = this.props;
    const windowWidth = window.innerWidth;
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
      </>
    );
  }
}
export default CollapsableCard;

//########
// {data.map((item, index) => {
//     return (
//       <Collapsible trigger={item.company.name}>
//         <Subtitle>Description</Subtitle>
//         <Blurb> {item.company.description}</Blurb>
//         <Subtitle>Role</Subtitle>
//          {item.role.map((item, index)=>{
//             return <Blurb>{item}</Blurb>
//         })}
//         <Subtitle>Tech</Subtitle>
//         <Blurb> {item.tech.map((item, index)=>{
//             return <div>{item}</div>

//         })}</Blurb>
//       </Collapsible>
//     );
//   })}

//#########
{
  /* <Accordion onTriggerClick={() => {}}>
          {data.map((item, index) => {
            return (
              <div data-trigger={item.company.name}>
                <Subtitle>Description</Subtitle>
                <Blurb> {item.company.description}</Blurb>
                <Subtitle>Role</Subtitle>
                {item.role.map((item, index) => {
                  return <Blurb>{item}</Blurb>;
                })}
                <Subtitle>Tech</Subtitle>
                <Blurb>
                  {" "}
                  {item.tech.map((item, index) => {
                    return <div>{item}</div>;
                  })}
                </Blurb>
              </div>
            );
          })}
        </Accordion> */
}
