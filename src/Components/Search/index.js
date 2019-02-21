import React, { Component, PropTypes } from "react";
import { SearchBox } from "./style.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "/images/search-plain.png" };
  }
  wordCount = e => {
    var currentTextCount = e.target.value.length;

    const hasText = () => {
      if (currentTextCount > 0) return true;
    };

    this.setState({ hasText: currentTextCount }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <SearchBox
      hasText={this.state.hasText}
        id="a3"
        as="input"
        onInput={(event) => {
          this.wordCount(event);
          console.log("input");
        }}
        onFocus={(event) => {
          this.wordCount(event);
        }}
        type="text"
        img={this.state.image}
        onChange={event => {
          this.wordCount(event);
          this.props.filterList(event);
        }}
      />
    );
  }
}

export default Search;
