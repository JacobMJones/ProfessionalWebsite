import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
  height: 100vh;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
  position: relative;
  height: 100%;
`;
const TitleWrapper = styled.div`
  @media (max-width: 600px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (min-width: 601px) {
    margin-top: 70px;
    margin-bottom: 50px;
  }
`;
const FlexRow = styled.section`
  display: flex;
  flex-driection: row;
  height: 100%;
  width: 100%;
`;
const AllCenter= styled.section`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;
const FlexColumn = styled.section`
  height:80%;
  width:100%
  display: flex;
  flex-direction: column;

`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
  background: ${props => (props.background ? props.background : "")};
max-height:${props => (props.maxHeight ? props.maxHeight : 100)}%;
min-height:${props => (props.minHeight ? props.minHeight : 0)}%;
`;
export {
  FullPage,
  HorizontalCenter,
  TitleWrapper,
  FlexRow,
  FlexColumn,
  FlexElement,
  AllCenter
};
