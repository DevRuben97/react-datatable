/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  & > input:checked ~ .checkmark {
    background-color: ${(props) =>
      props.white ? 'white' : props.theme.primary};
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  & > input:checked ~ .checkmark:after {
    display: block;
  }
  & > .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => (props.white ? 'black' : 'white')};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const CheckBox = ({ white, checked, onChekedChange,name }) => {
  return (
    <Container white={white}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(event) => onChekedChange && onChekedChange(event.target.checked)}
        name={name} 
      />
      <span className='checkmark' />
    </Container>
  )
}

export default CheckBox
