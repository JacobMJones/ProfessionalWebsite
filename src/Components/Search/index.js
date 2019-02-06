import React from "react";
import WhatIKnowCard from "../../Pages/WhatIKnow/WhatIKnowCard/";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  componentWillMount() {
    this.setState({ initialItems: this.props.list, items: this.props.list });
  }

  render() {
    const listLength = this.state.items.length;
    return (
      <div>
        <input
          type="text"
          placeholder="               S e a r c h"
          onChange={event => {
            this.filterList(event);
          }}
        />
        <List items={this.state.items} />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    console.log("in list");
    return (
      <ul>
        {this.props.items.map((item, index) => {
            console.log(item)
          return (
            <div key={item.name + index}>
              <WhatIKnowCard
                title={item.name}
                blurb={item.blurb}
                link={item.link}
              />
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Search;
