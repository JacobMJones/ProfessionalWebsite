import styled from "styled-components";

const RadioButton = styled.section`
  margin: 20px;
  padding: 0;
  height: 5vh;
  display: inline-block;
  font-size: 32px;
  text-align: center;
  width: 5vw;
`;
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
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? "#248232" : "#032b43")}
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")}
  }
`;
const Text = styled.div`
  margin-left: 4px;
  float: right;
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export {
  RadioButton,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  Icon,
  Text
};
