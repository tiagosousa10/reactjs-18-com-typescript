import styled, {keyframes} from "styled-components";




export const Input = styled.input`
padding:10px 30px;
outline:none; 
transition: all 0.6s;
border: 1px solid transparent;
background-color: ${props => props.theme.primary};

&:focus{
  border:1px solid red
}

&:hover{
  background-color:green
}

`
