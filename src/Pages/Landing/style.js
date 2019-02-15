import styled,{keyframes} from "styled-components";

import { BaseAnimation } from 'animate-css-styled-components';

  //create your custom animation


  //extend BaseAnimation component and create
  //your custom styled animation
  const SlideOutDown = styled(BaseAnimation)`
    animation: ${spin} 1s linear infinite;
  `;

  //export your custom styled animation  
  export default SlideOutDown;

const spin = keyframes`
from {transform:rotate(0deg);}
to {transform : rotate(360deg);}
`;
const morph = keyframes`
0% {border-radius: 5px}
`;