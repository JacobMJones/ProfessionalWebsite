import React, { Component } from "react";
import { StyledLink, Card, Title, Blurb, HorizontalCenter } from "./style";
import YouTube from "react-youtube";
import ProjectCardData from "../projectsData";
const opts = {
  width: "70%"

  // playerVars: { // https://developers.google.com/youtube/player_parameters
  //   autoplay: 1
  // }
};

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, link, blurb } = this.props;

    return (
      <HorizontalCenter>
        {ProjectCardData.map((item, index) => {
          const color = (1 === index % 2)  ? 'white' : '#ffeddf'
          return (
            <Card background={color}>
            <div style={{padding:24}}>
              {item.videoUrl && (
               
                  <YouTube videoId={item.videoUrl} opts={opts} />
                
              )}
              <Title>{item.title}</Title>
              <hr style={{ marginTop: -4, marginBottom: 16 }} />
              <Blurb>
                <b> {item.blurb[0]}</b>
                <br /> {item.blurb[1]}
              </Blurb>

              {item.webUrl && (
                <div style={{ marginTop: "32px", marginBottom: "32px" }}>
                  <StyledLink as="a" href={item.webUrl}>
                    Homepage
                  </StyledLink>
                </div>
              )}
                <div style={{height:24, backgroundColor:'color'}}/>
                </div>
            </Card>
          );
        })}
        <div style={{ height: "50px" }} />
      </HorizontalCenter>
    );
  }
}
export default ProjectCard;
