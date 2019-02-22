import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
  margin-top:-10vh;
`;
const NavButtonWrapper = styled.div`
flex:1
text-align:${props => (props.textAlign ? props.textAlign : "center")};
@media (max-width: 800px) {
padding-top:24px;
padding-left:24px;
padding-right:24px;
margin-top:20vh;
}
@media (min-width: 801px) {
  margin-top:10vh;
  margin-left:${props =>(props.marginLeft ? props.marginLeft : 0)}vw
}
`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
  @media (max-width: 800px) {
    margin-top:5em;
    paddingRight: 32
    }
    @media (min-width: 801px) {
      margin-top:3.5em;
      margin-left:${props =>(props.marginLeft ? props.marginLeft : 0)}vw
      min-width: ${props =>(props.minWidth ? props.minWidth : 0)}vw;
    }
`;
const FlexRow = styled.section`
 display:flex;
 flex-direction:row;
`;
const Title = styled.section`
  margin: 0;
  padding: 0;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 360)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}vw;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`;

const Brace = styled.hr``;
export {
  FullPage,
  HorizontalCenter,
  Title,
  Brace,
  NavButtonWrapper,
  FlexElement,
  FlexRow
};
