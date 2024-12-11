import styled from "styled-components";

export const ButtonElement = styled.button<{ $borderRadios: string, $size:string, $width: string}>`
  width: ${props => props.$borderRadios == 'rounded' ? (props.$size == 'sm' ? '40px' : '48px') : props.$width};
  height: ${props => props.$borderRadios == 'rounded' && (props.$size == 'sm' ? '40px' : '48px')};
  display:flex;
  align-items:center;
  justify-content:center;
  padding: ${props => props.$borderRadios != 'rounded' && (props.$size == 'sm' ? '5px' : '11px')} 0;
  outline: none;
  border:none;
  border-radius:${props => props.$borderRadios == 'sm' ? '5px' : props.$borderRadios == 'md' ? 11 : '50%'};
  font-weight:600;
  background-color: ${props => props.theme.COLORS.buttonBackground};
  color: ${props => props.theme.COLORS.buttonColor};
  cursor: pointer;
  transition: all .3s;

  &:hover{
    background-color: ${props => props.theme.COLORS.buttonHover}
  }

  `
