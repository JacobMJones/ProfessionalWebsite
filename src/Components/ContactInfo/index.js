import React, { Component } from "react";
import {
  ContactWrapper, ContactTitle
} from "./style.js";
import Contact from './Contact'
import PrismCode from "../../Components/PrismCode";
import "../../Theme/prism.css";
import TitleNavBar from "../../Components/TitleNavBar";
import Cards from "../../Components/Cards";

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  showCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    return (
      <ContactWrapper
        
      >
      {/* <ContactTitle>Contact Information</ContactTitle>   */}
      <Contact/>
      </ContactWrapper>
    );
  }
}
export default ContactInfo;
