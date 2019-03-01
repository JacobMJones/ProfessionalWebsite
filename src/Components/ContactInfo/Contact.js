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

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <FlexRow marginTop={-10}>
          <FlexElement maxWidth="2wv" />
          <FlexElement minWidth="80%">
            <FlexColumn>
              <FlexElement>
                <FlexRow>
                  <FlexElement maxWidth="50px">
                    <Image as="img" src="/images/Contact/email.svg" />
                  </FlexElement>
                  <FlexElement >
                    <Text>mrjacobtaiwan@gmail.com</Text>
                  </FlexElement>
                </FlexRow>
              </FlexElement>
              <FlexElement>
                <FlexRow>
                  <FlexElement maxWidth="50px">
                    <Image as="img" src="/images/Contact/phone.png" />
                  </FlexElement>
                  <FlexElement >
                    <Text>647 649-8747</Text>
                  </FlexElement>
                </FlexRow>
              </FlexElement>
              <FlexElement>
                <FlexRow>
                  <FlexElement maxWidth="50px">
                    <Image as="img" src="/images/Contact/github.svg" />
                  </FlexElement>
                  <FlexElement>
                    <Text as="a" href="https://github.com/JacobMJones">
                      JacobMJones
                    </Text>
                  </FlexElement>
                </FlexRow>
              </FlexElement>
              <FlexElement>
                <FlexRow>
                  <FlexElement maxWidth="50px">
                    <Image as="img" src="/images/Contact/linkedin.png" />
                  </FlexElement>
                  <FlexElement>
                    <Text
                      as="a"
                      href="https://www.linkedin.com/in/jacob-jones-139750168"
                    >
                      jacob-jones-139750168
                    </Text>
                  </FlexElement>
                </FlexRow>
              </FlexElement>
              <FlexElement />
            </FlexColumn>
          </FlexElement>
          <FlexElement maxWidth="2wv" />
        </FlexRow>
      </div>
    );
  }
}
export default Contact;
