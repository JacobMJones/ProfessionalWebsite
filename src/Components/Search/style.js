import styled from "styled-components";

const SearchBox = styled.section`
  margin-top: 20px;
  padding: 0;
  background: ${props => (props.background ? props.background : "white")};
  width: 80vw;
  height:10vh;
  display: inline-block;
  font-size:32px;
  text-align:center;
`;

export { SearchBox };
