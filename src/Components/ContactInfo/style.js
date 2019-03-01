import styled from "styled-components";

const ContactWrapper = styled.section`

  height: 50vh;
  
  background-color: white;
  
 border-radius:8px;
position:relative
@media (max-width: 600px) {
  margin-top: -36px
  width: 90%;
  paddingRight: 32
  margin-left: 0;
  height:400px;
  }
  @media (min-width: 601px) {
    min-width:600px;
    margin-left: 0%
  
    height:400px;
    margin-top: -24px
  }
`;

const ContactTitle = styled.section`
  font-size: 40px;
  margin-top: 18px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
float:right
`;

const Text = styled.section`


float:left
padding-left:8px;
padding-top:8px;
@media (max-width: 600px) {
  font-size:18px;
  }
  @media (min-width: 601px) {
    font-size:22px;
  
  }
`;
const FlexRow = styled.section`
  display: flex;
  flex-direction: row;

margin-top:${props =>(props.marginTop ? props.marginTop : 40)}px
  justify-content:${props =>(props.justify ? props.justify : 'center')}

`;
const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;

  
`;
const FlexElement = styled.section`
  flex: ${props => (props.flexSize ? props.flexSize : 1)};
 max-width:${props =>(props.maxWidth && props.maxWidth)}
 min-width:${props =>(props.minWidth && props.minWidth)}
`;
export {
  ContactWrapper,
  ContactTitle,
  Image,
  Text,
  FlexRow,
  FlexElement,
  FlexColumn
};
