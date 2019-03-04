import styled from 'styled-components';


const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
  border-radius:${props => (props.borderRadius ? props.borderRadius : 10)}px;

`;


const FullPage = styled.section`
background: ${props => (props.background ? props.background : "#d8cfaf")};
overflow-x: hidden;
height:100vh
`;

const FlexRow = styled.section`
  display: flex;
  flex-direction: row;

margin-top:${props => (props.marginTop ? props.marginTop : 40)}px
  justify-content:${props => (props.justify ? props.justify : 'center')}

`;
const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;

  
`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
 max-width:${props => (props.maxWidth && props.maxWidth)}
 min-width:${props => (props.minWidth && props.minWidth)}
`;




export {
  Box,
  FullPage,
  Text,
  FlexRow,
  FlexElement,
  FlexColumn
}
