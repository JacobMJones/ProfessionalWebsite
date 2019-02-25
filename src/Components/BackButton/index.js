import React, { Component } from "react";
import { Redirect } from "react-router";
import {Home} from './style'
class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleClick = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/studies"} push />;
    }
    return (
      <Home
        as="img"
        src="/images/back.png"
        onClick={() => {
          this.handleClick();
        }}
      />
    
    );
  }
}
export default BackButton;
