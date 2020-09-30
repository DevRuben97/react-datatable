/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Filter from './Filter'
import { Button } from '../../Button'
import { Container } from '../../DropDownMenu'

const FilterInput = ({ column, data, changeFilter }) => {
  const [showFilter, setShowFilter] = useState(false)
  const [criteria, setCriteria] = useState({
      label: 'Igual Que',
      value: "=="
  });
  const [inputValue, setInputValue]= useState('');

  function ApplyFilter(){
      
    const obj= {
        fieldName: column.fieldId,
        value: inputValue,
        operator: criteria.type==='function'? null: criteria.value,
        function: criteria.type==='function'? criteria.value: null
    };

    changeFilter(obj);
    setShowFilter(false);
  }

  return column.filterType ? (
    <Container>
      <Button onClick={() => setShowFilter(!showFilter)}>{column.name}</Button>
      <Filter
        item={column}
        rows={data}
        showFilter={showFilter}
        onChangeCriteria={(value) => setCriteria(value)}
        onChangeValue={(value)=> setInputValue(value)}
        criteria={criteria}
        actualValue={inputValue}
        onApplyFilter={ApplyFilter}
      />
    </Container>
  ) : null
}

export default FilterInput
