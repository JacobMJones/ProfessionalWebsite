import React, { Component } from "react";
import { Redirect } from "react-router";

class CodeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleClick = () => {
    this.getCode();
    // this.setState({ redirect: true });
  };

  getCode = () => {
    console.log("get code");
    fetch(
      "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js"
    )
      .then(function(response) {
        // When the page is loaded convert it to text
        return response.text();
      })
      .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
      })
      .catch(function(err) {
        console.log("Failed to fetch page: ", err);
      });
  };
  render() {
    if (this.state.redirect) {
      //   return <Redirect to={"/"} push />;
    }
    return (
      <img
        style={{ width: "4vw", height: "4vw" }}
        src="/images/code.png"
        onClick={() => {
          this.handleClick();
        }}
      />
    );
  }
}
export default CodeButton;
