import styled from "styled-components";



const FlexElement = styled.section`
flex:1;
text-align:center;
minWidth:${props => (props.minWidth ? props.minWidth : 0)}vw;
padding: 10px;
position:relative;
  @media (max-width: 800px) {
    
    }
    @media (min-width: 801px) {
      text-align:${props => (props.textAlign ? props.textAlign : "center")};
     
    }
`;
const FlexElementTitle = styled.section`
flex:1;
text-align:center;
min-width:60vw;

  @media (max-width: 800px) {
    // padding-top:${props => (props.paddingTop ? props.paddingTop : 0)}vh;
    }
    @media (min-width: 801px) {
      text-align:${props => (props.textAlign ? props.textAlign : "center")};
     
    }
`;
const FlexRow = styled.section`
 display:flex;
 flex-direction:row;

 
`;
const Title = styled.section`
position:relative;

  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}  
  color: ${props => (props.color ? props.color : " #001514")}
  background: ${props => (props.background ? props.background : "transparent")}
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0 )}vh;

  font-family: "Fira Sans", sans-serif;
  font-weight:bold;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};

  @media (max-width: 800px) {
    font-size: 50px;
    }
    @media (min-width: 801px) {
      font-size: ${props => (props.fontSize ? props.fontSize : 3)}em;
     
    }

`;

const Brace = styled.hr``;
export {
  Brace,
  FlexElement,
  FlexRow,
  FlexElementTitle,
  Title
};
