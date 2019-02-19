import React, { Component } from "react";
import { FullPage, HorizontalCenter, Title, Brace } from "./style.js";
import ProjectCard from "./ProjectCard";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FullPage>
        <HorizontalCenter>
        <Title fontSize={64}  fontWeight={1000}>
          <HorizontalCenter>Projects</HorizontalCenter>
          <Brace/>
        </Title>
          <ProjectCard />
        
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
