/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import styled from 'styled-components';

const Input= styled.input`
    height: 38px;
    padding: 6px 10px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;

    &:focus{
        border: 1px solid #33C3F0;
        outline: 0;
    }
`

const Button = ({ label, placeholder, value, onChangeValue }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <Input
        className='u-full-width'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
      />
    </Fragment>
  )
}

export default Button
