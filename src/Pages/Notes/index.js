import React, { Component } from "react";
import notesData from "../../Constants/notesData.js";
import Search from "../../Components/Search/index";
import List from "../../Components/List";
import TitleNavBar from "../../Components/TitleNavBar";
import codeData from "../../Constants/codeData";
import getCode from "../../Functions/getCode.js";
import { FullPage, HorizontalCenter,TitleWrapper, BottomBuffer } from "./style.js";
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";


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
  componentDidMount() {
    const arrayOfCode = [];
    codeData.NotesCode.forEach(async function(element) {
      const code = await getCode(element);
      arrayOfCode.push(code);
    });
    this.setState({ code: arrayOfCode });
  }
  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
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
          <br />
          <Search list={notesData} filterList={this.filterList} />
          <br /> <br />
          {!this.state.showCode ? (
            <List items={this.state.items} />
          ) : (
            <PrismCode code={this.state.code} />
          )}
        </HorizontalCenter>
        <BottomBuffer/>
      </FullPage>
    );
  }
}
export default Notes;
