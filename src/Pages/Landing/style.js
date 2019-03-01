import styled, { keyframes} from "styled-components";

import { BaseAnimation } from "animate-css-styled-components";


//Spin and SlideOutDown are not currently in use
const spin = keyframes`
from {transform:rotate(0deg);}
to {transform : rotate(360deg);}
`;
const SlideOutDown = styled(BaseAnimation)`
  animation: ${spin} 1s linear infinite;
`;

const TitleWrapper = styled.div`
color:white
@media (max-width: 600px) {
  margin-top:50px;
  margin-bottom:50px
  }
  @media (min-width: 601px) {
    margin-top:70px;
    margin-bottom:50px
  }
`;
const FullPage = styled.section`
  background: ${props => (props.background ? props.background : props.theme.colors.darkBlue)};
  overflow: hidden;
`;
const ButtonText = styled.section`
  color: {props.theme.colors.darkBlue}
  @media (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.buttonTextMobile}  
    letter-spacing: 2px;
    
    }
    @media (min-width: 601px) {
      font-size:${props => props.theme.fontSize.buttonTextDesktop}  
  letter-spacing: 2px;
    }
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
  margin-top: ${props => (props.marginTop && props.marginTop)};
`;

const Blurb = styled.div`
color:white;
margin-bottom:50px;
max-width:90vw;
margin-left:5vw;
@media (max-width: 600px) {
 
 font-size:16px;
  }
  @media (min-width: 601px) {
    font-size:28px;
    max-width:60vw;
    margin-left:20vw;
  }
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
const NavButton = styled.img.attrs({
  src: props => props.imgUrl
})`
width:50px;
height:50px;
padding-left:${props =>(props.paddingLeft && props.paddingLeft)};
`;

const ContactWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding-top:50px;
`;
const FlexRow = styled.section`
 display:flex;
 flex-direction:row;
`;
export {
  SlideOutDown,
  ButtonText,
  HorizontalCenter,
  FullPage,
  FlexElement,
  FlexColumn,
  Blurb,
  FlexRow,
  TitleWrapper,
  ContactWrapper,
  NavButton,

};
