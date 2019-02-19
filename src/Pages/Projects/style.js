import styled from "styled-components";


const braceColor = 'red';

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
`;
const Title = styled.section`
  margin: 0;
  padding: 0;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 360)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}vw;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};

`;

const Brace = styled.hr`



`;
export { FullPage, HorizontalCenter, Title, Brace };
