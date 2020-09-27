/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import Filter from './Filter'
import { Container } from '../DropDownMenu';

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

  const [currentFilters, setCurrentFilters] = useState([])

  function renderButtonFilter(column) {
    return (
      column.filterType && (
        <Container>
          <Button >{column.name}</Button>
          <Filter item={column} rows={data} />
        </Container>
      )
    )
  }

  return (
    <div>
      <FilterContainer>
        {columns.map((item) => renderButtonFilter(item))}
      </FilterContainer>
      <ButtonContainer>
            <Button outlined>Limpiar</Button>
            <Button outlined style={{borderColor: 'red',color: 'red'}}>Cancelar</Button>
      </ButtonContainer>
    </div>
  )
}

export default RowFilters
