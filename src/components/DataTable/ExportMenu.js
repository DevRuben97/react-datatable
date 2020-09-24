/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import DropDown, { Container } from '../DropDownMenu'
import { Button } from '../Button'



const ExportMenu = (props) => {

    const [showMenu, setShowMenu]= useState(false);
    const items= [
    {
        label: 'PDF',
        icon: ()=> props.icons.ExportPdf(),
        onClick: ()=> alert('hola')
    },
    {
        label: 'CSV',
        icon: ()=> props.icons.ExportCsv(),
        onClick: ()=> alert('hola')
    },
]

  return (
    <Container>
      <Button backgroundColor='#007ACC' onClick={()=> setShowMenu(!showMenu)}>
        {props.icons.Downloand()}
      </Button>
      <DropDown show={showMenu} items={items} onExit={()=> setShowMenu(!showMenu)}/>
    </Container>
  )
}

export default ExportMenu
