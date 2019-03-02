
import styled from 'styled-components';
 
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
  border-radius:${props => (props.borderRadius ? props.borderRadius : 10)}px;
  
`
const FullPage = styled.section`

 

background: ${props => (props.background ? props.background : "#d8cfaf")};
overflow-x: hidden;
height:100vh
`;

export {Box, FullPage};



