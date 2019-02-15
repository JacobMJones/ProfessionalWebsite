import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";
import {
  FullPage,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter,
  Blurb,
  HorizontalCenter,
  Title
} from "../../Theme/globalStyle.js";

class PlainResume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  d;
  render() {
    let screenWidth = window.innerWidth;
    console.log(this.props.data);
    return (
      <HorizontalCenter>
        {this.props.data.map((item, index) => {
          if (item.tech) {
            return (
              <div
                style={
                  screenWidth > 800
                    ? {
                        // border: "3px dotted black",
                        width: "50%",
                        marginLeft: "25%",
                        borderRadius: "5px"
                      }
                    : {
                        width: "90%",
                        marginLeft: "5%",
                        borderRadius: "5px"
                      }
                }
              >
              
                <div>
                  <Title
                    textAlign="center"
                    marginLeft={8}
                    fontSize={32}
                    color={"white"}
                    background={"#248232"}
                    borderRadius="5px"
                    style={{ opacity: 0.9 }}
                  >
                    {this.props.data[index].company.name}
                  </Title>
                </div>
                <div>
                  <Blurb
                    marginTop={32}
                    marginLeft={screenWidth > 800 ? "-45" : "4"}
                  >
                    {this.props.data[index].company.description}
                  </Blurb>
                  <Title
                    background={"#d8cfaf"}
                    fontSize={24}
                    marginTop={32}
                    color={"white"}
                  >
                    <b>Responsibilities</b>
                  </Title>
                  <Blurb
                    marginLeft="-45"
                    marginTop={32}
                    marginLeft={screenWidth > 800 ? "-45" : "4"}
                  >
                    {this.props.data[index].role.map((item, index) => {
                      return (
                        <li style={{ marginTop: "16px" }}>
                          <span style={{ marginLeft: "-10px" }}>{item}</span>
                        </li>
                      );
                    })}
                  </Blurb>
                  <Title
                    background={"#d8cfaf"}
                    fontSize={24}
                    marginTop={32}
                    color={"white"}
                  >
                    <b>Technology</b>
                  </Title>
                  <Blurb
                    marginLeft={screenWidth > 800 ? "-45" : "4"}
                    marginTop={32}
                  >
                    {this.props.data[index].tech.map((item, index) => {
                      return (
                        <li style={{ listStyleType: "square" }}>{item}</li>
                      );
                    })}
                  </Blurb>
                  <div style={{ height: "32px" }} />
                  <hr /><hr />
                  <div style={{ height: "80px" }} />
                </div>
              </div>
            );
          }
        })}
      </HorizontalCenter>
    );
  }
}
export default PlainResume;
