import React, { Component } from "react";
import notesData from "../../Constants/notesData.js"
import Search from "../../Components/Search/index";
import List from "../../Components/List"
import TitleNavBar from "../../Components/TitleNavBar";
import {
  FullPage,
  HorizontalCenter,
  Title,
  TitleWrapper
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
      <FullPage>
        <HorizontalCenter>
        <TitleWrapper>
            <TitleNavBar
              title="My Notes"
              showCode={this.showCode}
              flip={this.state.showCode}
              backArrow={true}
            />
          </TitleWrapper>
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
