/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';


const SelectInput= styled.select`
    height: 38px;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;

    &:focus{
        border: 1px solid ${props=> props.theme.primary};
        outline: 0;
    }
`

const Select= ({items, placeholder,value, onChangeValue, disabled})=> {

    return (
        <SelectInput onChange={onChangeValue} value={value} disabled={disabled}>
            <option value="" disabled selected hidden>{placeholder}</option>
            {items.map((item,index)=> (

                <option value={item.value} key={index +1}>
                    {item.label}
                </option>
            ))}
        </SelectInput>
    )
}

export default Select;