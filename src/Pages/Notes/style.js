import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "#d8cfaf")};
  overflow-x: hidden;
`;
const HorizontalCenter = styled.section`
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
`;
const Title = styled.section`
position:relative;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
text-decoration: ${props => (props.underline ? props.underline : 'none')}
  font-size: ${props => (props.fontSize ? props.fontSize : 40)}px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};

  @media (min-width: 320px) {
  }
  @media (min-width: 801px) {
  }
`;
export { FullPage, HorizontalCenter, Title };
