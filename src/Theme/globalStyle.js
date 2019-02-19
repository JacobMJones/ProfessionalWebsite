import styled from "styled-components";

const Divider = styled.section`
  height: ${props => (props.height ? props.height : 0)};
`;

export { Divider };
