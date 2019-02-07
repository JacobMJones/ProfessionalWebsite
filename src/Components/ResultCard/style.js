import styled from "styled-components";

const Card = styled.section`
  margin-top: 20px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
  width:80vw;
  display:inline-block;
`;

const Title = styled.section`
  margin: 8px;
  padding: 0;
`;
const Blurb = styled.section`
text-align:left;
  margin: 8px;
  padding: 0;
`;
const StyledLink = styled.section`
margin:8;  
color: blue;
  &:hover {
    color: purple;
  }
`;
const HorizontalCenter = styled.section`
  text-align: center;
`;
export { Card, Title, StyledLink, Blurb, HorizontalCenter };
