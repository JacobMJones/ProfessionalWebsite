import React, { Component } from "react";
import notesData from "../../Constants/notesData.js"
import Search from "../../Components/Search/index";
import List from "../../Components/List"
import {
  FullPage,
  HorizontalCenter,
  Title,
} from "./style.js";


class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.setState({ initialItems: notesData, items: notesData });
  }
  filterList = event => {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList });
  };
  render() {
    return (
      <FullPage overflowY={'none'}>
        <HorizontalCenter>
          {/* <Title marginTop={56}>My Notes</Title> */}
          <br/>
          <Search list={notesData} filterList={this.filterList}/>
          <br/>  <br/>
          <List items={this.state.items} />
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Notes;
