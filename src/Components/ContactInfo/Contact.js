import React, { Component } from "react";
import {
  ContactWrapper,
  ContactTitle,
  Image,
  Text,
  FlexRow,
  FlexElement,
  FlexColumn
} from "./style.js";

const contactInfo = [
  { text: "mrjacobtaiwan@gmail.com", image: "/images/Contact/email.svg" },
  { text: "647 649-8747", image: "/images/Contact/phone.png" },
  {
    text: "JacobMJones",
    image: "/images/Contact/github.svg",
    href: "https://github.com/JacobMJones"
  },
  {
    text: "jacob-jones-139750168",
    image: "images/Contact/linkedin.png",
    href: "https://www.linkedin.com/in/jacob-jones-139750168"
  }
];
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  makeAContact = (text, image, url) => {
    return (
      <FlexElement>
        <FlexRow>
          <FlexElement maxWidth="50px">
            <Image as="img" src={image} />
          </FlexElement>
          <FlexElement>
            <Text  as="a" href={url}>{text}</Text>
          </FlexElement>
        </FlexRow>
      </FlexElement>
    );
  };
  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <FlexRow marginTop={-10}>
          <FlexElement maxWidth="2wv" />
          <FlexElement minWidth="80%">
            <FlexColumn>
              {contactInfo.map((item, index) => {
                return this.makeAContact(item.text, item.image, item.href);
              })}
            </FlexColumn>
          </FlexElement>
          <FlexElement maxWidth="2wv" />
        </FlexRow>
      </div>
    );
  }
}
export default Contact;
