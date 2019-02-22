import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "transparent")};
  width:100%;
  overflow-x: hidden;
 
`;

const FlexRow = styled.section`
  display: flex;
  flex-driection: row;
  height: 100%;
  width: 100%;
  justify-contents: ${props => (props.justify ? props.justify : "center")};
`;
const FlexColumn = styled.section`
  height:100%
  width:100%
  display: flex;
  flex-direction: column;

`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
  background: ${props => (props.background ? props.background : "transparent")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 1)}px;
  margin: ${props => (props.margin ? props.margin : 0)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}vw;
  font-size: ${props => (props.fontSize ? props.fontSize : 1)}em;
  position: relative;
  text-align: center;
  min-width: ${props => (props.minWidth ? props.minWidth : "10vw")};
`;
const AllCenter = styled.section`
  position: absolute;
  top: ${props => (props.top ? props.top : 50)}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
`;
const ButtonText = styled.section`
  color: white;
  font-size: 24px;
  letter-spacing: 2px;
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
 
  font-family: "Fira Sans", sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize : 3.5)}em;
  font-weight:bold;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  
`;

const Blurb = styled.section`
  position: relative;
 
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}%;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  letter-spacing: 0.4px;
  @media (max-width: 800px) {
   
  }
  @media (min-width: 801px) {
    width: 40vw;
    left: 25vw;
  }
`;
export {
  Title,
  Blurb,
  FullPage,
  FlexRow,
  FlexElement,
  FlexColumn,
  AllCenter,
  ButtonText,
  HorizontalCenter
};
