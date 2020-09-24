/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import React from 'react';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`

const DropDownContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  /* right: 0; */
`

const DropDownItem = styled.button`
  color: black;
  padding: 12px 5px;
  background-color: white;
  text-decoration: none;
  display: block;
  width: 100%;
  outline: 0;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`

const DropDown = ({ items, show ,onExit}) => {
  return (
    <DropDownContainer show={show} onMouseLeave={onExit}>
      {items.map((item, index) => (
        <DropDownItem onClick={item.onClick} key={index}>
          {item.icon && item.icon()} {item.label}
        </DropDownItem>
      ))}
    </DropDownContainer>
  )
}


export default DropDown;