/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import styled from 'styled-components'

import TexBox from '../TextBox'
import { Button, CircleButton } from '../Button'
import ExportMenu from './ExportMenu'
import ViewConfigModal from './ViewConfigModal';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const TableToolBar = ({
  searchFunction,
  isLoading,
  fetchData,
  selectedRows,
  columns,
  icons,
  showFilters,
  setShowFilters
}) => {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal]= useState(false);

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TexBox
          placeholder='Buscar..'
          focusColor='#007ACC'
          onChangeValue={(event) => setSearch(event.target.value)}
          value={search}
          onClearValue={() => setSearch('')}
          onEnter={() => searchFunction(search)}
        />

        <div style={{ paddingLeft: '10px' }}>
          <CircleButton
            background='#007ACC'
            onClick={() => searchFunction(search)}
            disabled={search === '' || isLoading}
          >
            <icons.Search />
          </CircleButton>
        </div>
      </div>
      <div>
        <ExportMenu icons={icons} selectedRows={selectedRows} columns={columns}/>
        <Button
        backgroundColor='#007ACC'
        onClick={()=> setShowModal(true)}
        >
          <icons.ViewConfig/>
        </Button>
        <Button
          backgroundColor='#007ACC'
          onClick={() => setShowFilters(!showFilters)}
        >
          <icons.Filter />
        </Button>
        <Button backgroundColor='#007ACC' onClick={() => fetchData()}>
          <icons.Update />
        </Button>
        <Button backgroundColor='#007ACC'>
          <icons.Add /> Agregar Nuevo
        </Button>
      </div>
      <ViewConfigModal show={showModal} onClose={()=> setShowModal(!showModal)}/>
    </Container>
  )
}

export default TableToolBar
