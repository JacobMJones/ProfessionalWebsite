import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "white")};
  overflow-x: hidden;
  height:100vh
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
export {
  FullPage,
  HorizontalCenter,
 TitleWrapper
};
