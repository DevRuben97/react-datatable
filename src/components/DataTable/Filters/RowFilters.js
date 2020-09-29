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

const RowFilters = ({ columns, filter, data }) => {
  const obj = {
    fieldName: '',
    operator: '',
    function: '',
    value: ''
  }

  const [currentFilters, setCurrentFilters] = useState([]);


  function changeFilter(value,column,criteria){
    const currentArray= [...currentFilters];

    const currentColumn= currentArray.filter(s=> s.fieldName=== column)[0];

    if (!currentColumn){
      currentArray.push({
        fieldName: column,
        operator: criteria,
        function: null,
        value: value
      });

      setCurrentFilters(currentArray);
    }
    else {
     const index=  currentArray.findIndex(currentColumn);

    }

  }

  return (
    <div>
      <FilterContainer>
        {columns.map((item,index)=> (
          <FilterInput key={index} column={item} data={data} changeFilter={changeFilter}/>
        ))}
      </FilterContainer>
      <ButtonContainer>
            <Button outlined>Limpiar</Button>
            <Button outlined style={{borderColor: 'red',color: 'red'}}>Cancelar</Button>
      </ButtonContainer>
    </div>
  )
}

export default RowFilters
