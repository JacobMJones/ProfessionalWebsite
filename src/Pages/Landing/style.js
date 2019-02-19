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
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 40)}px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  @media (min-width: 320px) {
  }
  @media (min-width: 801px) {
  }
`;
const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "#d8cfaf")};
  overflow-x: hidden;
`;
const ButtonText = styled.section`
  color: white;
  font-size: 24px;
  letter-spacing: 2px;
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
export {
  SlideOutDown,
  Title,
  ButtonText,
  HorizontalCenter,
  FullPage,
  FlexElement,
  FlexColumn
};
