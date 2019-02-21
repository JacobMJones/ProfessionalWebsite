import styled from "styled-components";

const Text = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
  font-family: "Fira Sans", sans-serif;
 font-weight:bold;
  z-index: 1;
  transform: translateX(0%);
  color: #001514;
  transform: translateY(-100%);
  transition: transform 200ms, color 200ms, font-size 200ms;
  &:hover {
    font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
    color:#ffeddf;
    transform: translate(6%, -105%);
  }
`;
const Text2 = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
  font-family: "Fira Sans", sans-serif;

  color: #248232;
  z-index: 0;
  transform: translateY(0%);
`;

const Outer = styled.div`
margin-top: ${props => (props.fontSize ? props.fontSize+2 : 6)}em;
  text-align: center;
  max-height: ${props => (props.fontSize ? props.fontSize  : 10)}em;
`;

const LetterWrapper = styled.div`
margin-top: ${props => (props.fontSize ? -props.fontSize * 4: 6)}em;
`;
const WordWrapper = styled.div`
display:flex;
flexDirection:row;
`;
const Inner = styled.div`
  display: inline-block;
`;
export { Text, Text2, Outer, Inner, WordWrapper, LetterWrapper };
