import React, { Component } from "react";
import { Redirect } from "react-router";
import H from './style'
class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleClick = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} push />;
    }
    return (
      <img 
      style={{width:'4vw', height:'4vw'}}
        src="/images/home.png"
        onClick={() => {
          this.handleClick();
        }}
      />
    );
  }
}
export default HomeButton;
