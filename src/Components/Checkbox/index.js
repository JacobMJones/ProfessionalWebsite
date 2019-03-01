//based off of https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

import React from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, Text } from "./style.js";

const Checkbox = ({ className, checked, text, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>  
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>     
    </StyledCheckbox>
    <Text>{text}</Text>
  </CheckboxContainer>
);

export default Checkbox;
