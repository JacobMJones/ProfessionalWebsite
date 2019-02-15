import styled from "styled-components";

const Card = styled.section`

  margin-top: 20px;
  padding:0;
  
  background: ${props => (props.background ? props.background : "white")} no-repeat;
  width: 80vw;
  display: inline-block;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
  0 1px 5px 0 rgba(0,0,0,0.12),
  0 3px 1px -2px rgba(0,0,0,0.2);
  border-radius:4px;
  font-size:20px;
  min-height:20vh;
  @media (max-width: 800px) {
    width: 80vw;
  }
  @media (min-width: 801px) {
    width: 50vw;
  }
  // background-Image: url(/images/paper.png)

`;

const Title = styled.section`
 
  margin: 8px;
  padding: 0;
  font-size: 24px;
  text-decoration:underline;
  
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
