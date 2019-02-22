import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
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
flex:1;
text-align:center;
minWidth:${props => (props.minWidth ? props.minWidth : 0)}vw;
padding: 10px;
position:relative;
  @media (max-width: 800px) {
    
    }
    @media (min-width: 801px) {
      text-align:${props => (props.textAlign ? props.textAlign : "center")};
     
    }
`;
const FlexElementTitle = styled.section`
flex:1;
text-align:center;
minWidth:${props => (props.minWidth ? props.minWidth : 0)}vw;

  @media (max-width: 800px) {
    // padding-top:${props => (props.paddingTop ? props.paddingTop : 0)}vh;
    }
    @media (min-width: 801px) {
      text-align:${props => (props.textAlign ? props.textAlign : "center")};
     
    }
`;
const FlexRow = styled.section`
 display:flex;
 flex-direction:row;
margin-top:10vh;
 
`;
const Title = styled.section`
position:relative;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}  
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0 )}vh;
  font-size: ${props => (props.fontSize ? props.fontSize : 3)}em;
  font-family: "Fira Sans", sans-serif;
  font-weight:bold;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};

`;

const Brace = styled.hr``;
export {
  FullPage,
  HorizontalCenter,
  Brace,
  NavButtonWrapper,
  FlexElement,
  FlexRow,
  FlexElementTitle,
  Title
};
