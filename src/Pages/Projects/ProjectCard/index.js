import React, { Component } from "react";
import {
  StyledLink,
  Card,
  Title,
  Blurb,
  HorizontalCenter,
  CardWrapper,
  Line,
  LinkWrapper,
  Divider
} from "./style";
import YouTube from "react-youtube";
import ProjectCardData from "../projectsData";

const opts = {
  width: "85%"
};

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HorizontalCenter>
        {ProjectCardData.map((item, index) => {
          const color = 1 === index % 2 ? "white" : "#ffeddf";
          return (
            <>
              <Card background={color}>
                <CardWrapper>
                  <Title>{item.title}</Title>
                  <Line as="hr" />
                  <Blurb>
                    <b> {item.blurb[0]}</b>
                    <br /> {item.blurb[1]}
                  </Blurb>
                  {item.webUrl && (
                    <LinkWrapper>
                      <StyledLink as="a" href={item.webUrl}>
                        Homepage
                      </StyledLink>
                    </LinkWrapper>
                  )}
                  <Divider />
                </CardWrapper>
                {item.videoUrl && (
                  <YouTube videoId={item.videoUrl} opts={opts} />
                )}
                <Divider />
              </Card>
              <Divider />
            </>
          );
        })}
      </HorizontalCenter>
    );
  }
}
export default ProjectCard;
