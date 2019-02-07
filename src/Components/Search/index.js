import React from "react";
import { SearchBox } from "./style.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchBox
        as="input"
        type="text"
        onChange={event => {
          this.props.filterList(event);
        }}
      />
    );
  }
}

export default Search;
