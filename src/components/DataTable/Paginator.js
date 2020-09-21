/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'

const Container = styled.div`
  display: inline-block;
`

const Item = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  background-color: ${props=> props.active? props.theme.primary: 'white'};
  color: ${props=> props.active? 'white': 'black'};
  border-radius: 5px;

  &:hover{
    background-color: ${props=> !props.active? '#ddd': ''};
    border-radius: 5px;
  }
`

const Paginator = ({pages,currentPage,onPageChange}) => {


    function renderElements(){
        const items= [];
        for(let item=1;item<=pages;item++){
          items.push(<Item href="" key={item} active={item===currentPage}>{item}</Item>);
        }

        return items;
    }

  return (
    <Container>
      <Item href='#'><FaArrowLeft/></Item>
      {renderElements()}
      <Item href='#'><FaArrowRight/></Item>
    </Container>
  )
}

export default Paginator
