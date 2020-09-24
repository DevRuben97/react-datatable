/* eslint-disable prettier/prettier */
import React from 'react';
import numeral from 'numeral'
import { Th,Td } from '../components/Styled/DataTable';
import {FaPlus,FaEllipsisV} from 'react-icons/fa'

export function formatColumnItem(column, value) {
  let valueFormated

  switch (column.dataType) {
    case 'currency':
      valueFormated = numeral(value).format('$0,0.00')
      break
    case 'component':
        valueFormated= value()
        break
      default: 
        valueFormated= value
        break;
  }

  return valueFormated
}


export function renderColumnActions(){

  return (
    <Th style={{width: '7%'}}>Acciones</Th>
  )
}

export function renderActionsColumn(options,item){

  if (options.type=== 'icon'){
    
    
    return (
      <Td>
        {options.actions.map((action,index)=> (
          <a style={{paddingRight: 5, cursor: 'pointer'}} key={index} onClick={()=> action.onClick(item)}><FaPlus/></a>
        ))}
      </Td>
    )

  }
  else if (options.type=== 'menu'){
   
    return (
      <Td>
        <a><FaEllipsisV/></a>
      </Td>
    )
  }
}
