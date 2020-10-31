/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react'
import DropDown, { Container } from '../DropDownMenu'
import { Button } from '../Button'
import ExportData from '../../utils/ExportData'

// Context
import ConfigContext from '../../contexts/ConfigContext'
const ExportMenu = ({ columns, selectedRows, icons, isLoading }) => {
  const { configuation } = useContext(ConfigContext)

  const helper = new ExportData(columns, selectedRows, configuation.title.label)

  const [showMenu, setShowMenu] = useState(false)
  const items = [
    {
      label: 'PDF',
      icon: () => <icons.ExportPdf />,
      onClick: () => helper.pdf()
    },
    {
      label: 'CSV',
      icon: () => <icons.ExportCsv />,
      onClick: () => helper.csv()
    }
  ]

  return (
    <Container>
      <Button
        backgroundColor='#007ACC'
        onClick={() => setShowMenu(!showMenu)}
        disabled={selectedRows.length === 0 || isLoading }
      >
        <icons.Downloand />
      </Button>
      <DropDown
        show={showMenu}
        items={items}
        onExit={() => setShowMenu(!showMenu)}
      />
    </Container>
  )
}

export default ExportMenu
