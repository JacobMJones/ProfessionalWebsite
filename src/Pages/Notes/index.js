import React, { Component } from "react";
import notesData from "./notesData";
import styled, { ThemeProvider } from "styled-components";
import Search from "../../Components/Search/index";
import List from "../../Components/List"
import {
  FullPage,
  HorizontalCenter,
  FlexElement,
  FlexRow,
  FlexColumn,
  AllCenter,
  Title,
  Blurb
} from "../../Theme/globalStyle.js";



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
      <FullPage overflow={'none'}>
        <HorizontalCenter>
          <Title>My Notes</Title>
          <Search list={notesData} filterList={this.filterList}/>
          <List items={this.state.items} />
        </HorizontalCenter>
      </FullPage>
    );
  }
}
export default Notes;
