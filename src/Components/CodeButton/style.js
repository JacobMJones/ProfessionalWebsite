import styled from "styled-components";

const Code = styled.div`
  @media (max-width: 600px) {
    width: 25px;
  }
  @media (min-width: 601px) {
    width: 40px;
    height: auto;
    position: absolute;
    left: 0;
  }
`;

export { Code };
