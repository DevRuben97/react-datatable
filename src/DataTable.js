/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Conteiner,
  TableTitle,
  Table,
  THead,
  TBody,
  Th,
  Td,
  Tr
} from './components/Styled/DataTable'
import TableToolBar from './components/DataTable/TableToolBar'
import TableFooter from './components/DataTable/Footer'
import DtCheckbox from './components/DataTable/DtCheckBox'
import LoadingView from './components/DataTable/LoadingView'
import EmptyView from './components/DataTable/EmptyView'
import DataTypeFormater from './utils/DataTypeFormater'
import { Collapse } from 'react-collapse'
import RowFilters from './components/DataTable/Filters/RowFilters'

// Contexts:

import IconsContext from './contexts/IconContext'
import ConfigContext from './contexts/ConfigContext'

const DataTable = ({ columns, remoteData, options, components }) => {
  // Heleprs:
  const typeFormater = new DataTypeFormater(components.icons, options)

  const requestData = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    orderBy: {
      by: 'id',
      isDescending: false
    },
    filters: []
  }

  const [tableValues, setValues] = useState(requestData)
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 0,
    totalPages: 0,
    nextPage: 0,
    previousPage: 0,
    totalRecords: 0
  })
  const [data, setData] = useState([])
  const [isFiltering, setIsFiltering] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [selectedRows, setSelectedRows] = useState([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    remoteData && fetch()
  }, [])

  async function fetch(reload) {
  
    setLoading(true)
    const { data } = await remoteData(reload ? requestData : tableValues)
    setPagination(data)
    setData(data.data)
    setLoading(false)
  }

  async function search(value) {
    setLoading(true)
    const newObj = { ...tableValues, search: value }
    setValues(newObj)

    const { data } = await remoteData(newObj)
    setPagination(data)
    setData(data.data)
    setLoading(false)
  }

  async function filter(array) {
    const newObj = { ...tableValues, pageNumber: 1, filters: array }
    setValues(newObj)
    setIsFiltering(array.length > 0)
    setLoading(true)
    const { data } = await remoteData(newObj)
    setPagination(data)
    setData(data.data)
    setLoading(false)
  }

  async function paginate(page) {
    const obj = { ...tableValues, pageNumber: page }
    setValues(obj)

    const { data } = await remoteData(obj)
    setPagination(data)
    setData(data)
  }

  async function orderByColumn(column) {
    const orderBy = {
      by: column,
      isDescending: !tableValues.orderBy.isDescending
    }

    const obj = { ...tableValues, orderBy }
    setValues(obj)

    const { data } = await remoteData(obj)
    setPagination(data)
    setData(data.data)
  }

  async function changePageSize(value) {
    setLoading(true)
    const newObj = { ...tableValues, pageSize: Number.parseInt(value) }
    setValues(newObj)
    const { data } = await remoteData(newObj)
    setPagination(data)
    setData(data.data)
    setLoading(false)
  }

  function renderSortColumn(column) {
    if (column.toLowerCase() !== tableValues.orderBy.by.toLowerCase()) {
      return null
    } else if (tableValues.orderBy.isDescending) {
      return <components.icons.DownArrow />
    } else {
      return <components.icons.UpArrow />
    }
  }

  return (
    <ThemeProvider theme={options?.theme}>
      <IconsContext.Provider value={{ tableIcons: components.icons }}>
        <ConfigContext.Provider value={{ configuation: options }}>
          <Conteiner>
            <TableTitle align={options.title.align}>
              {options.title?.label}
            </TableTitle>
            <TableToolBar
              searchFunction={search}
              fetchData={fetch}
              icons={components.icons}
              selectedRows={selectedRows}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              columns={columns}
              showViewConfig={options.showViewConfig}
              isLoading={isLoading}
            />
            <Collapse isOpened={showFilters}>
              <RowFilters
                columns={columns}
                fetchFilter={filter}
                setIsFiltering={setIsFiltering}
              />
            </Collapse>
            {isLoading? (
              <LoadingView loadingLabel={options.text.loading} />
            ): (
              <Table>
              <THead>
                <Tr header cursorPointer>
                  <Th style={{ width: '5%' }}>
                    <DtCheckbox
                      header
                      selectedItems={selectedRows}
                      setSelectedItems={setSelectedRows}
                      data={data}
                    />
                  </Th>
                  {columns.map((column, index) => (
                    <Th
                      key={index}
                      onClick={() => orderByColumn(column.fieldId)}
                    >
                      {column.name}
                      <span>{renderSortColumn(column.fieldId)}</span>
                    </Th>
                  ))}
                  {options.rowActions && typeFormater.renderColumnActions()}
                </Tr>
              </THead>
              <TBody
                primaryColor={options?.headerBackground}
                hoverActive={!isLoading && data.length > 0}
              >
                {data.length === 0 && !isLoading ? (
                  <EmptyView
                    label={
                      !isFiltering
                        ? options.text.dataEmptyText
                        : options.text.dataEmptyFilterText
                    }
                  />
                ) : (
                  data.map((item, index) => (
                    <Tr key={index}>
                      <Td>
                        <DtCheckbox
                          row={item}
                          selectedItems={selectedRows}
                          setSelectedItems={setSelectedRows}
                        />
                      </Td>
                      {Object.keys(item).map((cell, cellIndex) => (
                        <Td key={cellIndex}>
                          {typeFormater.formatColumnItem(
                            columns.filter((s) => s.fieldId === cell)[0],
                            item[cell]
                          )}
                        </Td>
                      ))}
                      {typeFormater.renderActionsColumn(item)}
                    </Tr>
                  ))
                )}
              </TBody>
              <tfoot>
                <TableFooter
                  totalRecords={pagination.totalRecords}
                  totalPages={pagination.totalPages}
                  currentPage={pagination.pageNumber}
                  changePageSize={changePageSize}
                  icons={components.icons}
                  paginate={paginate}
                />
              </tfoot>
            </Table>
            )}
          </Conteiner>
        </ConfigContext.Provider>
      </IconsContext.Provider>
    </ThemeProvider>
  )
}

export default DataTable
