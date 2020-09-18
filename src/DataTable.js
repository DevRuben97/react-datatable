/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Conteiner,Table, THead, TBody, Th, Td, Tr } from './components/Styled/DataTable'
import TableToolBar from './components/TableToolBar';
import { DataTableProps } from './PropTypes'



import {formatColumnItem} from './utils/DataTypeFormater';

const DataTable = ({ columns, remoteData, options }) => {
  const [tableValues, setValues] = useState({
    pageNumber: 1,
    pageSize: 10,
    search: '',
    orderBy: {
      by: 'id',
      isDescending: false
    },
    filters: {}
  })

  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 0,
    TotalPages: 0,
    NextPage: 0,
    PreviousPage: 0,
    TotalRecords: 0
  })
  const [data, setData] = useState([])
  const [isFiltering, setIsFiltering] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    remoteData &&  fetch()
  }, [])

  async function fetch() {
    setLoading(true)
    const { data } = await remoteData(tableValues)
    setPagination(data)
    setData(data.data)
  }

  function search() {}

  async function filter(obj) {
    const newObj = { ...tableValues, pageNumber: 1, filters: obj }
    setValues(newObj)

    const { data } = await remoteData(tableValues)
    setPagination(data)
    setData(data.data)
  }

  async function paginate(page) {
    const obj = { ...tableValues, pageNumber: page }
    setValues(obj)

    const { data } = await remoteData(tableValues)
    setPagination(data)
    setData(data)
  }

  function orderByColumn() {}

  return (
    <Conteiner>
      <TableToolBar/>
      <Table>
        <THead background={options?.headerBackground}>
          <Tr header cursorPointer>
            {columns.map((column, index) => (
              <Th key={index}>
                {column.name}
                 <i className="fas fa-arrow-up" />
              </Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item).map((cell, cellIndex) => (
                <Td key={cellIndex}>
                {
                  formatColumnItem(columns.filter(s=> s.fieldId=== cell)[0],item[cell])
                }</Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </Table>
    </Conteiner>
  )
}

DataTable.propTypes = DataTableProps

export default DataTable
