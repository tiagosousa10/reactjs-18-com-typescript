import styled, {keyframes} from "styled-components";

const rotate = keyframes`
from{
  transform:rotate(0deg) scale(1)
}
to{
  transform:rotate(360deg) scale(3)
}
`


export const Input = styled.input`
padding:10px 30px;
outline:none; 
transition: all 0.6s;
border: 1px solid transparent;
animation: ${rotate} 1s alternate infinite;


&:focus{
  border:1px solid red
}

&:hover{
  background-color:green
}

`
