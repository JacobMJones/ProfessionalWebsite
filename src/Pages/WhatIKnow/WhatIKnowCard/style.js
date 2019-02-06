import styled from "styled-components";

const Card = styled.section`
  margin: 0;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
`;

const Title = styled.section`
  margin: 8px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
`;
const Blurb = styled.section`
  margin: 8px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
`;
const StyledLink = styled.section`
margin:8;  
color: blue;
  &:hover {
    color: purple;
  }
`;
export { Card, Title, StyledLink, Blurb };
