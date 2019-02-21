import styled from "styled-components";

const Card = styled.section`
 
 
  background: ${props => (props.background ? props.background : "white")}
    no-repeat;
  display: inline-block;
  @media (max-width: 800px) {
    padding-top: -40px;
    padding-bottom: 64px;
    width: 100vw;
  }
  @media (min-width: 801px) {

    width: 50vw;
    border-radius:10px;
  }
`;

const Title = styled.section`
  margin-top: 32px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 28)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0.5)}vw;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`;
const Blurb = styled.section`
  text-align: left;
  margin: 8px;
  margintop: 32px;
  padding: 0;
`;
const StyledLink = styled.section`
  margin: 8;
  color: blue;
  &:hover {
    color: purple;
  }
`;
const HorizontalCenter = styled.section`
  text-align: center;
`;
export { Card, Title, StyledLink, Blurb, HorizontalCenter };