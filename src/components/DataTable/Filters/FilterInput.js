/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import Filter from './Filter'
import { Button } from '../../Button'
import { Container } from '../../DropDownMenu'

// context
import IconsContext from '../../../contexts/IconContext'
import ConfigContext from '../../../contexts/ConfigContext'

const selectCriteria = {
  label: 'Igual Que',
  value: '=='
}

const FilterInput = ({ column, changeFilter, clearInputs, setClearInput }) => {
  const [showFilter, setShowFilter] = useState(false)
  const [criteria, setCriteria] = useState(selectCriteria)
  const [inputValue, setInputValue] = useState('')
  const [current, setCurrent] = useState(null)

  const { tableIcons } = useContext(IconsContext)
  const { configuation } = useContext(ConfigContext)

  function ApplyFilter() {
    const obj = {
      fieldName: column.fieldId,
      value:
        column.filterType === 'select' ? `${inputValue.value}` : inputValue,
      operator: criteria.type ? null : criteria.value,
      function: criteria.type === 'function' ? criteria.value : null
    }

    changeFilter(obj)
    setShowFilter(false)
    setCurrent(column.filterType === 'select' ? inputValue.label : inputValue)
  }

  useEffect(() => {
    if (clearInputs) {
      setInputValue('')
      setCriteria(selectCriteria)
      setClearInput(false)
      setCurrent(null)
    }
  }, [clearInputs])

  return column.filter ? (
    <Container onMouseLeave={() => setShowFilter(false)}>
      <Button
        withoutTextBold={current === null}
        onClick={() => setShowFilter(!showFilter)}
        style={{ border: 'none', backgroundColor: '#f5f6fa', color: 'black' }}
      >
        {current === null
          ? column.name
          : column.filterType === 'date'
          ? moment(current).format(configuation.dateTime.format)
          : current}{' '}
        <tableIcons.DownArrowFilter />
      </Button>
      <Filter
        item={column}
        showFilter={showFilter}
        onChangeCriteria={(value) => setCriteria(value)}
        onChangeValue={(value) => setInputValue(value)}
        criteria={criteria}
        actualValue={inputValue}
        onApplyFilter={ApplyFilter}
      />
    </Container>
  ) : null
}

export default FilterInput
