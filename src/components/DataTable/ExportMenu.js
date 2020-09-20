/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import DropDown, { Container } from '../DropDownMenu'
import { Button } from '../Button'
import { FaFileDownload,FaFilePdf, FaFileCsv } from 'react-icons/fa'




const ExportMenu = (props) => {

    const [showMenu, setShowMenu]= useState(false);
    const items= [
    {
        label: 'PDF',
        icon: ()=> <FaFilePdf/>,
        onClick: ()=> alert('hola')
    },
    {
        label: 'CSV',
        icon: ()=> <FaFileCsv/>,
        onClick: ()=> alert('hola')
    },
]

  return (
    <Container>
      <Button backgroundColor='#007ACC' onClick={()=> setShowMenu(!showMenu)}>
        <FaFileDownload />
      </Button>
      <DropDown show={showMenu} items={items} onExit={()=> setShowMenu(!showMenu)}/>
    </Container>
  )
}

export default ExportMenu
