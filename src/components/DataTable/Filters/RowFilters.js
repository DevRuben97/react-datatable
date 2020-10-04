/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Button } from '../../Button'
import FilterInput from '../Filters/FilterInput'
import IconsContext from '../../../contexts/IconContext'
import { ToolTipConteiner, ToolTipText } from '../../ToolTip'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f6fa;
  padding: 10px 10px;
  margin: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: flex-end;
`

const RowFilters = ({ columns, fetchFilter }) => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [clearInptus, setClearInptus] = useState(false)
  const { tableIcons } = useContext(IconsContext)

  function changeFilter(obj) {

    const array = [...currentFilters]

    const filteredArray= array.filter(s=> s.fieldName!== obj.fieldName);

    filteredArray.push(obj);

    setCurrentFilters(filteredArray);
    fetchFilter(filteredArray);
  }

  function clear() {
    setCurrentFilters([])
    fetchFilter([])
    setClearInptus(true)
  }

  return (
    <div>
      <FilterContainer>
        <div>
          {columns.map((item, index) => (
            <FilterInput
              key={index}
              column={item}
              changeFilter={changeFilter}
              clearInputs={clearInptus}
              setClearInput={setClearInptus}
            />
          ))}
          <ToolTipConteiner>
            <Button
              onClick={clear}
              style={{
                border: 'none',
                backgroundColor: '#f5f6fa',
                color: 'black'
              }}
            >
              <tableIcons.Cancel />
            </Button>
            <ToolTipText>Limpiar todos los filtros</ToolTipText>
          </ToolTipConteiner>
        </div>
      </FilterContainer>
    </div>
  )
}

export default RowFilters
