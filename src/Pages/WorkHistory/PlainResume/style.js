import styled from "styled-components";

const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
`;

const Card = styled.div`
@media (max-width: 600px) {
  width: 90vw;
  margin-left: 5vw;
  background:${props => (props.background ? props.background : "white")} no-repeat;
}
@media (min-width: 601px) {
  width: 50vw;
        margin-left: 25vw;
        border-radius: 5px;
        background:${props => (props.background ? props.background : "white")} no-repeat;
`;
const Title = styled.section`
position:relative;
  width: 100%;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
 
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : "none")};
 

  font-size: ${props => (props.fontSize ? props.fontSize : 40)}px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  @media (min-width: 320px) {
  }
  @media (min-width: 801px) {
  }
`;

const Blurb = styled.section`
  
 
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 5)}%;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  letter-spacing: 0.4px;
  @media (max-width: 600px) {
   
  }
  @media (min-width: 601px) {
    width: 40vw;
    left: 25vw;
  }
`;
export { Title, Blurb, HorizontalCenter, Card };
