/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Conteiner,Table, THead, TBody, Th, Td, Tr } from './components/Styled/DataTable'
import TableToolBar from './components/DataTable/TableToolBar';
import TableFooter from './components/DataTable/Footer';
import { DataTableProps } from './PropTypes'
import {AiOutlineArrowUp} from 'react-icons/ai';
import {formatColumnItem} from './utils/DataTypeFormater';



const DataTable = ({ columns, remoteData, options }) => {

  const requestData= {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    orderBy: {
      by: 'id',
      isDescending: false
    },
    filters: {}
  }

  const [tableValues, setValues] = useState(requestData);

  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 0,
    TotalPages: 0,
    NextPage: 0,
    PreviousPage: 0,
    totalRecords: 0
  })
  const [data, setData] = useState([])
  const [isFiltering, setIsFiltering] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    remoteData &&  fetch()
  }, [])

  async function fetch(reload) {
    setLoading(true)
    const { data } = await remoteData(reload? requestData: tableValues)
    setPagination(data)
    setData(data.data)
  }

 async function search(value) {
    setLoading(true);
    const newObj= {...tableValues, search: value};
    setValues(newObj);

    const { data } = await remoteData(newObj)
    setPagination(data)
    setData(data.data)
    setLoading(false);

  }

  async function filter(obj) {
    const newObj = { ...tableValues, pageNumber: 1, filters: obj }
    setValues(newObj)

    const { data } = await remoteData(newObj)
    setPagination(data)
    setData(data.data)
  }

  async function paginate(page) {
    const obj = { ...tableValues, pageNumber: page }
    setValues(obj)

    const { data } = await remoteData(obj)
    setPagination(data)
    setData(data)
  }

  function orderByColumn() {}

  return (
    <Conteiner>
      <TableToolBar 
      searchFunction={search}
      fetchData={fetch}
      />
      <Table>
        <THead background={options?.headerBackground}>
          <Tr header cursorPointer>
            {columns.map((column, index) => (
              <Th key={index}>
                {column.name}
                 <AiOutlineArrowUp/>
              </Th>
            ))}
          </Tr>
        </THead>
        <TBody primaryColor={options?.headerBackground}>
          {data.map((item, index) => (
            <Tr key={index} >
              {Object.keys(item).map((cell, cellIndex) => (
                <Td key={cellIndex}>
                {
                  formatColumnItem(columns.filter(s=> s.fieldId=== cell)[0],item[cell])
                }</Td>
              ))}
            </Tr>
          ))}
        </TBody>
        <tfoot>
          <TableFooter
          totalPages={pagination.totalRecords}
          />
        </tfoot>
      </Table>
    </Conteiner>
  )
}

DataTable.propTypes = DataTableProps

export default DataTable
