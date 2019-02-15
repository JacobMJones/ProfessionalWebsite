
import styled from 'styled-components';
 
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
export const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
  border-radius:${props => (props.borderRadius ? props.borderRadius : 10)}px;
  
`
 
export default Box;



// &:hover {
  //   transform:${props => (props.xPos ? `translate(${this.props.xPos}px, 150px)` : `translate('200px', '150px')`)} 
  // }