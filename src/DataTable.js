/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Table, THead, TBody, Th, Td, Tr } from './components/Styled/DataTable'
import { DataTableProps } from './PropTypes'

const DataTable = ({ columns, remoteData, options }) => {
  const [tableValues, setValues] = useState({
    pageNumber: 1,
    pageSize: 10,
    search: '',
    orderBy: {
      by: 'id',
      isDescending: false
    },
    filters: {
      fieldName: '',
      operator: '',
      fuctions: '',
      value: ''
    }
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
    remoteData && fetch()
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
    <div>
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
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  )
}

DataTable.propTypes = DataTableProps

export default DataTable
