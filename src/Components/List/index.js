import React from "react";
import ResultCard from "../ResultCard";
import { ListBackground } from "./style.js";
class List extends React.Component {
  render() {
    return (
      <>
        {this.props.items.map((item, index) => {
          return (
            <ListBackground key={item.name + index}>
              <ResultCard
                title={item.name}
                blurb={item.blurb}
                link={item.link}
              />
            </ListBackground>
          );
        })}
      </>
    );
  }
}

export default List;
