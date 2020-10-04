/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import TextBox from '../../TextBox'
import Select from '../../Select'
import { Button } from '../../Button'

const Container = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  padding: 15px 15px;
  /* right: 0; */
`

const ButtonConteiner = styled.div`
  display: flex;
  justify-content: space-between;
`

const FilterCtiteria = [
  {
    label: 'Igual Que',
    value: '=='
  },
  {
    label: 'Que contenga',
    value: 'Contains()',
    type: 'function'
  },
  {
    label: 'Mayor que',
    value: '>'
  },
  {
    label: 'Menor que',
    value: '<'
  }
]

const Filter = ({
  item,
  showFilter,
  onChangeCriteria,
  onChangeValue,
  actualValue,
  criteria,
  onApplyFilter,
  onClearFilter
}) => {
  function changeCriteria(value) {
    const valueCriteria = FilterCtiteria.filter((s) => s.value === value)[0]

    onChangeCriteria(valueCriteria)
  }

  function OnChangeSelect(value){

    const array= [...item.filterData];
    const selected= array.filter(s=> s.value===Number.parseInt(value))[0];
    onChangeValue(selected);
}

  function renderFilter() {
    let filterItem = React.Component
    switch (item.filterType) {
      case 'textField': {
        filterItem = (
          <div style={{ margin: 5 }}>
            <TextBox
              placeholder={`filtrar por ${item.name}`}
              onChangeValue={(event) => onChangeValue(event.target.value)}
              value={actualValue}
            />
          </div>
        )
        break
      }
      case 'date': {

        filterItem=(
            <div style={{margin: 5}}>
                <TextBox 
                onChangeValue={(event) => onChangeValue(event.target.value)}
                value={actualValue}
                type="date"
                />
            </div>
        )
        break
      }
      case 'select': {

        filterItem = (
          <div style={{ margin: 5 }}>
            <Select
              placeholder={`Filtrar por ${item.name}`}
              items={item.filterData}
              onChangeValue={(event) => OnChangeSelect(event.target.value)}
              value={actualValue.value}
            />
          </div>
        )

        break
      }
    }

    return filterItem
  }

  return (
    <Container show={showFilter}>
      <Select
        placeholder='Criterio'
        items={FilterCtiteria}
        onChangeValue={(event) => changeCriteria(event.target.value)}
        value={criteria.value}
      />
      {renderFilter()}

      <ButtonConteiner>
        <Button outlined onClick={onClearFilter}>
          Limpiar
        </Button>
        <Button onClick={onApplyFilter}>Aceptar</Button>
      </ButtonConteiner>
    </Container>
  )
}

export default Filter
