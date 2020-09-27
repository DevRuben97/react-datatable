/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: ${props=> props.outlined? props.theme.primary: "#fff"};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props=> props.outlined? "#FFF": props.theme.primary};
  border-radius: 4px;
  border: 1px solid ${props=> props.theme.primary};
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin-top: 5px;
  margin-left: 5px;
  transition: all 1s;

  &:hover {
    border-color: ${props=> props.theme.primary};
  }

  &:disabled{
    background-color: #E0E0E0;
    cursor: not-allowed;
    border: none;
  }
`

export const CircleButton= styled.button`
  background-color: ${props=> props.theme.primary};
  width:42px;
  height:42px;
  border-radius:100%;
  background:${props=> props.theme.primary};
  border:none;
  outline:none;
  color:#FFF;
  font-size:16px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition:.3s;  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  cursor: pointer;

  &:disabled{
    background-color: #E0E0E0;
    box-shadow: none;
    transition: 1s;
  }
`;
