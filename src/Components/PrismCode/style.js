import styled, { keyframes } from "styled-components";

const CodePage = styled.div`
  text-align: center;
`;
const CodeWrapper = styled.div`
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 10px;
    width: 90vw;
  }
  @media (min-width: 801px) {
    font-size: 16px;
    width: 70vw;
  }
`;
const Pre = styled.pre`
  text-align: left;
  
`;
export { CodePage, Pre, CodeWrapper };
