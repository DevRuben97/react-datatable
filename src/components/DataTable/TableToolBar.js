/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import styled from 'styled-components'

import TexBox from '../TextBox'
import { Button, CircleButton } from '../Button'
import {VertialSeparator} from '../Separator';
import { FaSearch, FaSyncAlt, FaFilter,FaFileDownload ,FaPlus} from 'react-icons/fa'
import ExportMenu from './ExportMenu';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const TableToolBar = ({ searchFunction, isLoading,fetchData}) => {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TexBox
          placeholder='Buscar..'
          focusColor='#007ACC'
          onChangeValue={(event) => setSearch(event.target.value)}
          value={search}
          onClearValue={() => setSearch('')}
          onEnter={()=> searchFunction(search)}
        />

        <div style={{ paddingLeft: '10px' }}>
          <CircleButton
            background='#007ACC'
            onClick={() => searchFunction(search)}
            disabled={search === '' || isLoading}
          >
            <FaSearch />
          </CircleButton>
        </div>
      </div>
      <div>
        <ExportMenu />
        <Button backgroundColor="#007ACC">
          <FaFilter />
        </Button>
        <Button backgroundColor="#007ACC" onClick={()=> fetchData()}>
          <FaSyncAlt />
        </Button>
        <Button backgroundColor="#007ACC">
          <FaPlus /> Agregar Nuevo
        </Button>
      </div>
    </Container>
  )
}

export default TableToolBar
