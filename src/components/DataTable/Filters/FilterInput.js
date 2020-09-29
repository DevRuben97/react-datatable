/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Filter from './Filter'
import { Button } from '../../Button'
import { Container } from '../../DropDownMenu'

const FilterInput = ({ column, data, changeFilter }) => {

  const [showFilter, setShowFilter] = useState(false);


  return column.filterType ? (
    <Container>
      <Button onClick={() => setShowFilter(!showFilter)}>{column.name}</Button>
      <Filter item={column} rows={data} showFilter={showFilter} onChangeFilterValue={(value,criteria)=> changeFilter(value, column.fieldId,criteria)}/>
    </Container>
  ) : null
}

export default FilterInput
