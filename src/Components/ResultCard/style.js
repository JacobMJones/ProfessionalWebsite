import styled from "styled-components";

const Card = styled.section`
  margin-top: 20px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
  width: 80vw;
  display: inline-block;

  @media (min-width: 320px) {
    width: 80vw;
  }
  @media (min-width: 801px) {
    width: 50vw;
  }
`;

const Title = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Mukta");
  font-family: "Mukta", sans-serif;
  margin: 8px;
  padding: 0;
  font-size: 24px;
`;
const Blurb = styled.section`
  text-align: left;
  margin: 8px;
  padding: 0;
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
export { Card, Title, StyledLink, Blurb, HorizontalCenter };
