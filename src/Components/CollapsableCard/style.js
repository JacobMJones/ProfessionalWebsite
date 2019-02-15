import styled from "styled-components";

const Card = styled.section`
margin-bottom:16px;
  padding: 0;
  background: ${props => (props.background ? props.background : "transparent")};
 
  display: inline-block;
  margin-left:16px;

  @media (min-width: 800px) {
    width: 90vw;
  }
  @media (min-width: 801px) {
    width: 90vw;
  }
`;

const Title = styled.section`

  margin: 8px;
  padding: 0;
  font-size: 24px;
`;
const Subtitle = styled.section`


  text-align:left;
 
  padding: 0;
  
  text-decoration: underline;

  @media (max-width: 800px){
    font-size: 20px;
    margin-top: 16px;
    margin-left:16px;
  }
  @media (min-width: 801px) {
    font-size: 28px;

    margin-left: 32px;
  }
`;
const Blurb = styled.section`
  text-align: left;
  
  padding: 0;
  
  width:80%;
 
  @media (max-width: 800px){
    font-size: 16px;margin-top: 4px;
    margin-left: 30px;
  }
  @media (min-width: 801px) {
    width:80%;
    word-wrap:break-word;
    font-size:1.1em;
   margin: .8vw;
  }
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
export { Card, Title, StyledLink, Blurb, HorizontalCenter, Subtitle };
