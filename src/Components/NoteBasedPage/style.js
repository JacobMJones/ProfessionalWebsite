import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
  position:relative;
   

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

export {
  FullPage,
  HorizontalCenter,
 TitleWrapper,
 Blurb
};
