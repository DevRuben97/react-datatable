/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import styled from 'styled-components';
import {VscClose} from 'react-icons/vsc';

const Input= styled.input`
    height: 38px;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;

    &:focus{
        border: 1px solid ${props=> props.focusColor};
        outline: 0;
    }
`

const ClearButton= styled.button`
background-color: transparent;
color: black;
margin-left: -40px;
outline:none;
border: none;
padding-top: 6px;
font-size: 32px;
cursor: pointer;
`

const Button = ({ label, placeholder, value, onChangeValue, focusColor, onClearValue ,onEnter}) => {


  function enter(event){
    if (event.keyCode=== 13){
     onEnter && onEnter();
    }
  }

  return (
    <Fragment>
      <label>{label}</label>
      <Input
        className='u-full-width'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
        focusColor={focusColor}
        onKeyUp={enter}
      />
      <ClearButton onClick={onClearValue}><VscClose/></ClearButton>
    </Fragment>
  )
}

export default Button
