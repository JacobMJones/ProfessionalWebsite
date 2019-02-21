import React, { Component } from "react";
import { FullPage, HorizontalCenter, Title, Brace } from "./style.js";
import ProjectCard from "./ProjectCard";
import ShowCode from "../../Components/ShowCode";
import ActionTitle from "../../Components/ActionTitle";
import HomeButton from "../../Components/HomeButton";
import CodeButton from "../../Components/CodeButton";
import getCode from "../../Functions/getCode.js";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false, message: "loading" };
  }
  getCode = url => {
    console.log("get code");
    let code = fetch(
      "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js"
    )
      .then(function(response) {
        // When the page is loaded convert it to text
        return response.text();
      })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        let body = doc.querySelector("body").innerHTML;
        console.log(body.toString());

        return body;
      })
      .catch(function(err) {
        console.log("Failed to fetch page: ", err);
      });

    return code;
  };
  async componentDidMount() {
    this.setState({ message: "loading..." });
    let code = await this.getCode();
    console.log("last part");
    this.setState({ message: code });
  }

  render() {
    const { message } = this.state;
    const { showCode } = this.state;
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
                {/* <CodeButton /> */}
                <button />
              </div>
            </div>
          </div>
          <div style={{ height: "40px" }} />
          {!this.showCode ? (
            <div
              style={{
                display: "block"
              }}
            >
              <pre
                style={{
                  wordWrap: "break-word",
                  whiteSpace:'pre-wrap',
                  textAlign: "left",
                  padding: "20px",
                  maxWidth: "90vw"
                }}
              >
                {message}
              </pre>
            </div>
          ) : (
            <ProjectCard />
          )}
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Projects;
