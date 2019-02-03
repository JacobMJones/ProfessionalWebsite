import styled from "styled-components";
import posed from "react-pose";
import ReactDOM from "react-dom";
import { delay } from "popmotion";

const FullPage = styled(
  posed.div({
    visible: {
      opacity: 1,
      transition: { duration: 200 },
      delay:{duration:900}
    },
    hidden: {
      opacity: 0,
      transition: { duration: 200 },
      delay:{duration:900}
    }
  })
)`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background:${props => (props.background ? props.background : "lightyellow")};
`;


const FlexRow = styled.section`
  display: flex;
  flex-driection: row;
  height: 100%;
  width: 100%;
`;
const FlexColumn = styled.section`
  height:100%
  width:100%
  display: flex;
  flex-direction: column;
`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
  background: ${props => (props.background ? props.background : "#FFF")};

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 1)}px;

  margin: 10px;
  font-size: 0.8em;
  position: relative;
`;
const AllCenter = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { FullPage, FlexRow, FlexElement, FlexColumn, AllCenter };
