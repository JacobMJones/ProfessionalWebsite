import styled from "styled-components";

const SearchBox = styled.section`
  margin-top: 20px;
  padding: 0;
  
  height:8vh;
  display: inline-block;
  font-size:32px;
  transition: background-position 400ms, background-size 400ms, width 400ms;



  @media (max-width: 800px) {
    background: white no-repeat scroll 7px 7px;
    width:${props => (props.hasText ? '90vw' : '16vw')};
    background-position:${props => (props.hasText ? '10% 50%, 90% 50%' :  '50% 50%, 50% 50%')};
    background-image: url(${props => props.img}),  url(${props => props.img}) ;
    background-size: ${props => (props.hasText ? '25px' : '40px')};
    text-align:center;
 

    &:focus {
      background: white no-repeat scroll 7px 7px;
          background-position: 10% 50%, 90% 50%;
          background-image: url(${props => props.img}),  url(${props => props.img}) ;
          background-size: 30px;
          width: 90vw;
        }
  }
  @media (min-width: 801px) {
    background: white no-repeat scroll 7px 7px;
    width:${props => (props.hasText ? '50vw' : '5vw')};
    background-position:${props => (props.hasText ? '10% 50%, 90% 50%' :  '50% 50%, 50% 50%')};
    background-image: url(${props => props.img}),  url(${props => props.img}) ;
    background-size: ${props => (props.hasText ? '30px' : '50px')};
    text-align:center;

    &:focus {
      background: white no-repeat scroll 7px 7px;
          background-position: 10% 50%, 90% 50%;
          background-image: url(${props => props.img}),  url(${props => props.img}) ;
          background-size: 30px;
          width: 50vw;
        }
`;

export { SearchBox };

// width:${props => (props.hasText ? '50vw' : '5vw')};


const Text = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
  font-family: "Fira Sans", sans-serif;
 
  z-index: 1;
  transform: translateX(0%);
  color: gree;
  transform: translateY(-100%);
  transition: transform 200ms, color 200ms, font-size 200ms;
  &:hover {
    font-size: ${props => (props.fontSize ? props.fontSize : 6)}em;
 background-size: 10px;
    transform: translate(6%, -105%);
  }
`;