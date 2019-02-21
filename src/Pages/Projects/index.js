import React, { Component } from "react";
import { FullPage, HorizontalCenter, Title, Brace } from "./style.js";
import ProjectCard from "./ProjectCard";
import ShowCode from "../../Components/ShowCode";
import ActionTitle from "../../Components/ActionTitle";
import HomeButton from "../../Components/HomeButton";
import CodeButton from "../../Components/CodeButton";
import getCode from "../../Functions/getCode.js";
import PrismCode from "../../Components/PrismCode";

import "../../Theme/prism.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  async componentDidMount() {
    let code = await getCode();
    this.setState({ message: code });
  }
  showCode = () => {

    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    
    const screenWidth = window.innerWidth;
    return (
      <FullPage background="#d8cfaf">
        <HorizontalCenter>
          <div
            style={
              screenWidth > 800 ? { marginTop: "1vh" } : { marginTop: "1vh" }
            }
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div
                style={
                  screenWidth > 800
                    ? { flex: 1, marginTop: "3.5em", textAlign: "right" }
                    : {
                        flex: 1,
                        marginTop: "5em",
                        textAlign: "right",
                        paddingRight: 32
                      }
                }
              >
                <HomeButton />
              </div>

              <div style={{ flex: 1 }}>
                <ActionTitle text="Projects" fontSize={4} />
              </div>
              <div
                style={
                  screenWidth > 800
                    ? { flex: 1, marginTop: "3.5em", textAlign: "right" }
                    : {
                        flex: 1,
                        marginTop: "5em",
                        textAlign: "right",
                        paddingRight: 32
                      }
                }
              >
                <CodeButton functionToCall={this.showCode} />
              </div>
            </div>
          </div>
          <div style={{ height: "40px" }} />
          {!this.state.showCode ? (
            <ProjectCard />
          ) : (
            <PrismCode code={this.state.message} />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
