import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "#cd594a")};
  overflow-x: hidden;
  height: 100%;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
  @media (max-width: 601px) and (min-height: 900px) {
    margin-bottom: 50vh;
  }

  @media (min-width: 1000px) {
    margin-bottom: 17vh;
  }
`;
const Title = styled.section`
position:relative;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
text-decoration: ${props => (props.underline ? props.underline : "none")}
  font-size: ${props => (props.fontSize ? props.fontSize : 40)}px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};

  @media (min-width: 320px) {
  }
  @media (min-width: 801px) {
  }
`;
const TitleWrapper = styled.div`
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  @media (min-width: 601px) {
    margin-top: 80px;
    margin-bottom: 50px;
  }
`;

const BottomBuffer = styled.div`
backgroundColor:"#cd594a";
height:65vh;
`;
export { FullPage, HorizontalCenter, Title, TitleWrapper, BottomBuffer };
