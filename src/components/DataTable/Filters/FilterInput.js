/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import { Button } from '../../Button'
import { Container } from '../../DropDownMenu'

const selectCriteria= {
    label: 'Igual Que',
    value: "=="
}

const FilterInput = ({ column,  changeFilter,clearInputs,setClearInput }) => {
  const [showFilter, setShowFilter] = useState(false)
  const [criteria, setCriteria] = useState(selectCriteria);
  const [inputValue, setInputValue]= useState('');

  function ApplyFilter(){
      
    const obj= {
        fieldName: column.fieldId,
        value: inputValue,
        operator: criteria.type? null: criteria.value,
        function: criteria.type==='function'? criteria.value: null
    };

    changeFilter(obj);
    setShowFilter(false);
  }

  useEffect(()=> {
    if (clearInputs){
        setInputValue('');
        setCriteria(selectCriteria);
        setClearInput(false);
    }
  },[clearInputs])

  return column.filter ? (
    <Container onMouseLeave={()=> setShowFilter(false)}>
      <Button onClick={() => setShowFilter(!showFilter)}>{column.name}</Button>
      <Filter
        item={column}
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
