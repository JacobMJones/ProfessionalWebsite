import styled from "styled-components";

const FullPage = styled.section`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: ${props => (props.background ? props.background : "#ffeddf")};
  overflow: hidden;
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
  margin: ${props => (props.margin ? props.margin : 2)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 1)}em;
  position: relative;
  text-align: center;
`;
const AllCenter = styled.section`
  position: absolute;
  top: ${props => (props.top ? props.top : 50)}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HorizontalCenter = styled.section`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ButtonText = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Mukta");

  color: white;
  font-family: "Mukta", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
`;
const Title = styled.section`
  width: 80vw;
  color: #001514;
  @import url("https://fonts.googleapis.com/css?family=Mukta");

  font-family: "Mukta", sans-serif;
  font-size: 56px;
  text-align: center;
  @media (min-width: 320px) {
  
  }
  @media (min-width: 801px) {
  
  }
`;

const Blurb = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Mukta");
  font-family: "Mukta", sans-serif;

 
  position:relative;
 
  font-size: 18px;
  letter-spacing: 0.4px;
  @media (min-width: 800px) {
  }
  @media (min-width: 801px) {
    width: 30vw;
    left:25vw;
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
