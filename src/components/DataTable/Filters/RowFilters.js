/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../Button'
import FilterInput from '../Filters/FilterInput';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f6fa;
  padding: 10px 10px;
  margin: 10px;
`

const ButtonContainer= styled.div`
display: flex;
padding: 10px;
flex-direction: row;
justify-content: flex-end;
`;

const RowFilters = ({ columns, fetchFilter, data }) => {
  
  const [currentFilters, setCurrentFilters] = useState([]);


  function changeFilter(obj){
    debugger
    const array= [...currentFilters];

    array.push(obj);

    setCurrentFilters(array);

  }


  function applyFilters(){

    fetchFilter(currentFilters);
  }

  function clear(){
    setCurrentFilters([]);
    fetchFilter([]);
  }

  return (
    <div>
      <FilterContainer>
        {columns.map((item,index)=> (
          <FilterInput key={index} column={item} data={data} changeFilter={changeFilter}/>
        ))}
      </FilterContainer>
      <ButtonContainer>
            <Button outlined onClick={clear}>Limpiar</Button>
            <Button outlined onClick={applyFilters}>Aplicar</Button>
      </ButtonContainer>
    </div>
  )
}

export default RowFilters
