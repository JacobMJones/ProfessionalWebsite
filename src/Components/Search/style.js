import styled from "styled-components";

const SearchBox = styled.section`
  margin-top: 20px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};

  height:10vh;
  display: inline-block;
  font-size:32px;
  text-align:center;
  @media (min-width: 320px) {
    width:80vw;
  }
  @media (min-width: 801px) {
    width:50vw;
  }
`;

export { SearchBox };
