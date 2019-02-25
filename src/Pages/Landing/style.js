import styled, { keyframes } from "styled-components";

import { BaseAnimation } from "animate-css-styled-components";


const spin = keyframes`
from {transform:rotate(0deg);}
to {transform : rotate(360deg);}
`;
const SlideOutDown = styled(BaseAnimation)`
  animation: ${spin} 1s linear infinite;
`;
const Title = styled.section`
position:relative;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}  
  color: ${props => (props.color ? props.color : " white")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 7)}vh;
  font-size: ${props => (props.fontSize ? props.fontSize : 3)}em;
  font-family: "Fira Sans", sans-serif;
  font-weight:bold;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};

`;
const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "#093145")};
  overflow: hidden;
`;
const ButtonText = styled.section`
  color: #093145;
 ;
  @media (max-width: 600px) {
    font-size: 30px;
    letter-spacing: 2px;
    
    }
    @media (min-width: 601px) {
      font-size: 40px;
  letter-spacing: 2px;
    }
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
`;

const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
  position: relative;
  text-align: center;
`;
const FlexColumn = styled.section`
  height:100%
  width:100%
  display: flex;
  flex-direction: column;
marginTop:12;
`;

const NavButtonWrapper = styled.div`
flex:1
text-align:${props => (props.textAlign ? props.textAlign : "right")};
@media (max-width: 600px) {
margin-top:5em;
paddingRight: 32

}
@media (min-width: 601px) {
  margin-top:3.5em;
  
}
`;

const FlexRow = styled.section`
 display:flex;
 flex-direction:row;
`;
export {
  SlideOutDown,
  Title,
  ButtonText,
  HorizontalCenter,
  FullPage,
  FlexElement,
  FlexColumn,
  NavButtonWrapper,
  
  FlexRow
};
