import React, { Component } from "react";
import { StyledLink, Card, Title, Blurb, HorizontalCenter } from "./style";
import YouTube from "react-youtube";
import ProjectCardData from "../projectsData";

const opts = {
  width: "85%"
};

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const screenWidth = window.innerWidth;
    return (
      <HorizontalCenter>
        {ProjectCardData.map((item, index) => {
          const color = 1 === index % 2 ? "white" : "#ffeddf";
          return (
            <>
              <Card background={color}>
                <div style={{ padding: 24 }}>
                  <Title>{item.title}</Title>
                  <hr style={{ marginTop: -4, marginBottom: 16 }} />
                  <Blurb>
                    <b> {item.blurb[0]}</b>
                    <br /> {item.blurb[1]}
                  </Blurb>

                  {item.webUrl && (
                    <div style={{ marginTop: "16px" }}>
                      <StyledLink as="a" href={item.webUrl}>
                        Homepage
                      </StyledLink>
                    </div>
                  )}
                  <div style={{ height: 24, backgroundColor: "color" }} />
                </div>
                {item.videoUrl && (
                  <YouTube videoId={item.videoUrl} opts={opts} />
                )}
                  <div
                style={
                  screenWidth > 800 ? { height: "8vh" } : { height: "4vh" }
                }
              />
              </Card>
              <div
                style={
                  screenWidth > 800 ? { height: "8vh" } : { height: "4vh" }
                }
              />
            </>
          );
        })}
      </HorizontalCenter>
    );
  }
}
export default ProjectCard;
