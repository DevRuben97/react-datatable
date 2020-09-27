/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import DropDown, { Container } from '../DropDownMenu'
import { Button } from '../Button'



const ExportMenu = ({selectedRows, icons}) => {

    const [showMenu, setShowMenu]= useState(false);
    const items= [
    {
        label: 'PDF',
        icon: ()=> <icons.ExportPdf/>,
        onClick: ()=> alert('hola')
    },
    {
        label: 'CSV',
        icon: ()=> <icons.ExportCsv/>,
        onClick: ()=> alert('hola')
    },
]

  return (
    <Container>
      <Button backgroundColor='#007ACC' onClick={()=> setShowMenu(!showMenu)} disabled={selectedRows.length===0}>
        <icons.Downloand/>
      </Button>
      <DropDown show={showMenu} items={items} onExit={()=> setShowMenu(!showMenu)}/>
    </Container>
  )
}

export default ExportMenu
