/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import styled from 'styled-components'

import TexBox from '../TextBox'
import { Button, CircleButton } from '../Button'
import ExportMenu from './ExportMenu'
//import ViewConfigModal from './ViewConfigModal'

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
  setShowFilters,
  config
}) => {
  const [search, setSearch] = useState('')
  // const [showModal, setShowModal] = useState(false)

  return (
    <Container>
      {config.search && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <TexBox
          placeholder={config.search.placeHolder}
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
      )}
      <div>
        {/* More buttons */}
        {config.additionalButtons && config.additionalButtons.map((item,index)=> (
            <Button
            key={index}
            onClick={() => item.action}
            disabled={isLoading}
          >
            <item.icon/>
          </Button>
        ))}

        {config.export && (
          <ExportMenu
            icons={icons}
            selectedRows={selectedRows}
            columns={columns}
            isLoading={isLoading}
          />
        )}
        {/* {showViewConfig && (
           <Button backgroundColor='#007ACC' onClick={() => setShowModal(true)} disabled={isLoading}>
           <icons.ViewConfig />
         </Button>
        )} */}
        {config.showFilters && (
          <Button
            onClick={() => setShowFilters(!showFilters)}
            disabled={isLoading}
          >
            <icons.Filter />
          </Button>
        )}
        {config.reLoad && (
          <Button
          onClick={() => fetchData()}
          disabled={isLoading}
        >
          <icons.Update />
        </Button>
        )}
        {config.addButton.show && (
          <Button onClick={config.addButton.action} disabled={isLoading}>
          <icons.Add /> {config.addButton.label}
        </Button>
        )}
      </div>
      {/* {showViewConfig && (
        <ViewConfigModal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
      />
      )} */}
    </Container>
  )
}

export default TableToolBar
