import styled, { keyframes } from "styled-components";

const CodePage = styled.div`
  text-align: center;
`;
const CodeWrapper = styled.div`
  display: inline-block;

  @media (max-width: 600px) {
    font-size: .7em;
    width: 98vw;
  }
  @media (min-width: 601px) {
    font-size: 1em;
    width: 70vw;
  }
`;
const Pre = styled.pre`
  text-align: left;
word-wrap:normal
`;
export { CodePage, Pre, CodeWrapper };
