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
