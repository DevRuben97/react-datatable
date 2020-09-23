/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import {ThemeProvider} from 'styled-components';
import { Conteiner,TableTitle,Table, THead, TBody, Th, Td, Tr } from './components/Styled/DataTable'
import TableToolBar from './components/DataTable/TableToolBar';
import TableFooter from './components/DataTable/Footer';
import DtCheckbox from './components/DataTable/DtCheckBox';
import LoadingView from './components/DataTable/LoadingView';
import EmptyView from './components/DataTable/EmptyView';
import { DataTableProps } from './PropTypes'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
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
    pageNumber: 1,
    pageSize: 0,
    totalPages: 0,
    nextPage: 0,
    previousPage: 0,
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
    setLoading(false);
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

  async function orderByColumn(column) {

    const orderBy= {
      by: column,
      isDescending: !tableValues.orderBy.isDescending
    }

    const obj= {...tableValues,orderBy };
    setValues(obj);

    const {data}= await remoteData(obj);
    setPagination(data);
    setData(data.data);
  }

 async function changePageSize(value){
    setLoading(true);
    const newObj = { ...tableValues, pageSize: Number.parseInt(value) };
    setValues(newObj);
    const { data } = await remoteData(newObj);
    setPagination(data);
    setData(data.data);
    setLoading(false);
  }


  function renderSortColumn(column){

    if (column.toLowerCase() !== tableValues.orderBy.by.toLowerCase()){
      return null;
    }
    else if (tableValues.orderBy.isDescending){
      return <FaArrowDown/>
    }
    else {
      return <FaArrowUp />
    }
  }

  return (
    <ThemeProvider theme={options?.theme}>
      <Conteiner>
        <TableTitle align={options.title.align}>{options.title?.label}</TableTitle>
      <TableToolBar 
      searchFunction={search}
      fetchData={fetch}
      />
      <Table>
        <THead>
          <Tr header cursorPointer>
            <Th><DtCheckbox header/></Th>
            {columns.map((column, index) => (
              <Th key={index} onClick={()=> orderByColumn(column.fieldId)}>
                {column.name}
                 <span>{renderSortColumn(column.fieldId)}</span>
              </Th>
            ))}
          </Tr>
        </THead>
        <TBody primaryColor={options?.headerBackground} hoverActive={!isLoading && data.length>0}>
          {isLoading? (
            <LoadingView loadingLabel="Cargando Datos.."/>
          ): (
            data.length===0 && !isLoading? (
              <EmptyView label="No hay registros en esta tabla"/>
            ): (
              data.map((item, index) => (
                <Tr key={index} >
                  <Td><DtCheckbox/></Td>
                  {Object.keys(item).map((cell, cellIndex) => (
                    <Td key={cellIndex}>
                    {
                      formatColumnItem(columns.filter(s=> s.fieldId=== cell)[0],item[cell])
                    }</Td>
                  ))}
                </Tr>
              ))
            )
          )}
        </TBody>
        <tfoot>
          <TableFooter
          totalRecords={pagination.totalRecords}
          totalPages={pagination.totalPages}
          currentPage={pagination.pageNumber}
          changePageSize={changePageSize}
          />
        </tfoot>
      </Table>
    </Conteiner>
    </ThemeProvider>
  )
}

DataTable.propTypes = DataTableProps

export default DataTable
