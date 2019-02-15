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
} from "./style";

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
      <div style={{ backgroundColor: "white", width: "103vw" }}>
        <HorizontalCenter>
          <div style={{ height: 32 }} />
          {this.props.data.map((item, index) => {
            if (item.tech) {
              return (
                <div
                  style={
                    screenWidth > 800
                      ? {
                          width: "50%",
                          marginLeft: "25%",
                          borderRadius: "5px"
                        }
                      : {
                          width: "90%",
                          marginLeft: "2.5vw"
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
                      style={{ opacity: 0.8 }}
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
                      underline={"underline"}
                      // background={"#d8cfaf"}
                      fontSize={24}
                      marginTop={32}
                      color={"#001514"}
                      borderBottom="2px solid #001514"
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
                      underline={"underline"}
                      // background={"#d8cfaf"}
                      fontSize={24}
                      marginTop={32}
                      color={"#001514"}
                      borderBottom="2px solid #001514"
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

                    <div style={{ height: "140px" }} />
                  </div>
                </div>
              );
            }
          })}
        </HorizontalCenter>
      </div>
    );
  }
}
export default PlainResume;
