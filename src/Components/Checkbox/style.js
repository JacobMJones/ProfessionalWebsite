import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;
const Icon = styled.svg`
position:relative;
  fill: none;
  stroke: white;
  stroke-width: 4px;
  // top:-14px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${props => (props.checked ? "30px" : "32px")}
  height: ${props => (props.checked ? "30px" : "32px")}
  background: ${props => (props.checked ? "#107896" : "#BCA136")}
  border-radius: ${props => (props.checked ? "12px" : "5px")}
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")}
  }
`;
const Text = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Mukta");
  font-family: "Mukta", sans-serif;
  font-size: 16px;
  margin-left: 6px;
  margin-top: 3px;
  float: right;
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon, Text };
