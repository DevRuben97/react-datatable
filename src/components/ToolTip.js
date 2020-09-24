/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const ToolTipConteiner = styled.div`
  position: relative;
  display: inline-block;


  &:hover> span {
      visibility: visible;
      opacity: 1;
  }

  &> span{
    width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  }

  &> span::after{
    content: " ";
  position: absolute;
  top: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  }
`

export const ToolTipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index:1;

  opacity: 0;
  transition: opacity 1s;
`
