import React, { Component } from "react";
import Collapsible from "react-collapsible";
import Accordion from '../Accordion'
import {
  StyledLink,
  Card,
  Title,
  Blurb,
  HorizontalCenter,
  Subtitle
} from "./style";
import "./styles.css";
class CollapsableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {startPosition:-1};
  }

  render() {
    const { data } = this.props;
    return (
      <>
         <Accordion startPosition={this.state.startPosition} onClick={()=>{console.log('hello')}} onTriggerClick={()=>{}}>
          {data.map((item, index) => {
          return (
            <div data-trigger={item.company.name} >
            <Subtitle> {item.company.name}</Subtitle>
              <Subtitle>Description</Subtitle>
              <Blurb> {item.company.description}</Blurb>
              <Subtitle>Role</Subtitle>
               {item.role.map((item, index)=>{
                  return <Blurb>{item}</Blurb>
              })}
              <Subtitle>Tech</Subtitle>
              <Blurb> {item.tech.map((item, index)=>{
                  return <div>{item}</div>

              })}</Blurb>
            </div>
          );
        })}
        </Accordion>
     
      </>
    );
  }
}
export default CollapsableCard;


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