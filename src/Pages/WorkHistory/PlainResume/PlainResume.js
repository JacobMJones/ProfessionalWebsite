import React, { Component } from "react";
import { Blurb, HorizontalCenter, Title, Card } from "./style";

class PlainResume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HorizontalCenter>
          <div style={{ height: 64 }} />
          {this.props.data.map((item, index) => {
            const color = 1 === index % 2 ? "#efd469" : "white";
            if (item.tech || !this.props.showOnlyTech) {
              return (
                <div>
                  <Card background={color}>
                    <div>
                      <Title
                        textAlign="center"
                        marginLeft={8}
                        fontSize={32}
                        color={"white"}
                        background={"#829356"}
                        borderRadius="5px"
                      >
                        {this.props.data[index].company.name}
                      </Title>
                    </div>
                    <div>
                      <Blurb marginTop={32}>
                        {this.props.data[index].company.description}
                      </Blurb>
                      <Title
                        underline={"underline"}
                        fontSize={24}
                        marginTop={32}
                        color={"#001514"}
                        borderBottom="2px solid #001514"
                      >
                        <b>Responsibilities</b>
                      </Title>
                      <Blurb marginTop={32}>
                        {this.props.data[index].role.map((item, index) => {
                          return (
                            <li style={{ marginTop: "16px" }}>
                              <span style={{ marginLeft: "-8px" }}>{item}</span>
                            </li>
                          );
                        })}
                      </Blurb>
                      {item.tech && (
                        <>
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
                          <Blurb marginTop={32}>
                            {this.props.data[index].tech.map((item, index) => {
                              return (
                                <li style={{ listStyleType: "square" }}>
                                  {item}
                                </li>
                              );
                            })}
                          </Blurb>
                        </>
                      )}
                      <div style={{ height: "80px" }} />
                    </div>
                  </Card>
                  <div style={{ height: "64px" }} />
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
