import styled from "styled-components";

const Card = styled.section`
  margin: 0;
 
`;

const Title = styled.section`
  margin: 8px;
  padding: 0;
  font-size: 24px;
`;
const Subtitle = styled.section`
  text-align: center;
  // background: #248232;
  color: #001514;
  opacity: 0.8;
  border-radius: 5px;
  border: .5px solid;
  @media (max-width: 600px) {
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media (min-width: 601px) {
    font-size: 28px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
const Blurb = styled.section`
  text-align: left;
  padding: 0;
  width: 80%;
  color: #001514;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: 4px;
    margin-left: 16px;
    width:90%;
  }
  @media (min-width: 601px) {
    width: 80%;
    word-wrap: break-word;
    font-size: 20px;
    margin-top: 4px;
    margin-left: 10vw;
  }
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
export {
  Card,
  Title,
  StyledLink,
  Blurb,
  HorizontalCenter,
  Subtitle,
  FlexElement,
  FlexRow,
  FlexColumn
};
