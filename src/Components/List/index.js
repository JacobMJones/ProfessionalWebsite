import React from "react";
import ResultCard from "../ResultCard";

class List extends React.Component {
  render() {
    console.log("in list");
    return (
     <>
        {this.props.items.map((item, index) => {
          console.log(item);
          return (
            <div key={item.name + index}>
              <ResultCard
                title={item.name}
                blurb={item.blurb}
                link={item.link}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default List;
