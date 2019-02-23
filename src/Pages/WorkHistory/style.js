import styled from "styled-components";

const FullPage = styled.section`
  background: ${props => (props.background ? props.background : "transparent")};
  width:100%;
  overflow-x: hidden;
 
`;

const FlexRow = styled.section`
  display: flex;
  flex-driection: row;
  height: 100%;
  width: 100%;
  justify-contents: ${props => (props.justify ? props.justify : "center")};
 
`;

const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};

  @media (max-width: 600px) {
  
    paddingRight: 32
    min-width: ${props =>(props.minWidth ? props.minWidth : 0)}vw;
    }
    @media (min-width: 601px) {
      
      margin-left:${props =>(props.marginLeft ? props.marginLeft : 0)}vw
      min-width: ${props =>(props.minWidth ? props.minWidth-30 : 0)}vw;
    }
`;

const TitleWrapper = styled.div`

@media (max-width: 600px) {
  margin-top:120px;
  margin-bottom:30px
  }
  @media (min-width: 601px) {
    margin-top:80px;
    margin-bottom:50px
  }


`;
const CheckboxWrapper = styled.div`

@media (max-width: 600px) {
  margin-top:0;
  margin-bottom:20px
  }
  @media (min-width: 601px) {
    margin-top:-24px;
    margin-bottom:5px
  }


`;

const HorizontalCenter = styled.section`

  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  background: ${props => (props.background ? props.background : "transparent")};
   
  @media (max-width: 600px) {
    margin-top:-10vh;
    }
    @media (min-width: 601px) {
      margin-top:-1.2vh;
      }
`;

export {
  FullPage,
  FlexRow,
  FlexElement,
  HorizontalCenter,
  CheckboxWrapper,
  TitleWrapper
};
