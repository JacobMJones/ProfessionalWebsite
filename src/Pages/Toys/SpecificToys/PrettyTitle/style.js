import styled from "styled-components";

const Text = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
 
  text-align: center;
  z-index: 1;
  transform: translateX(0%);
  color: blue;
  transform: translateY(-100%);
  transition: transform 200ms, color 200ms, font-size 200ms;
  &:hover {
    font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
    color: blue;
    transform: translate(6%, -105%);
  }
`;
const Text2 = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;

  text-align: center;
  color: green;
  z-index: 0;
  transform: translateY(0%);
`;

const Outer = styled.div`
  text-align: center;
  max-height: ${props => (props.fontSize ? props.fontSize *1.2 : 10)}em;
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
