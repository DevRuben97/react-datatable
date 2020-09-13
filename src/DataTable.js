/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Table, THead, TBody, Th, Td, Tr } from './components/Styled/DataTable';
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'

import DtCheckbox from './components/DtCheckBox'

const DataTable = ({ columns, data, isLoading, actions, options }) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { selectedRowIds }
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <DtCheckbox header {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <DtCheckbox {...row.getToggleRowSelectedProps()} />
          ),
          width: 5
        },
        ...columns
      ])
    }
  )

  return (
    <div>
      <Table
      {...getTableProps()}
      >
        <THead background="#007ACC">
          {headerGroups.map((headerGroup)=> (
            <Tr
            {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, index)=> (
                <Th
                key={index}
                {...column.getHeaderProps(
                  column.getSortByToggleProps()
                )}
                 >
                   {column.render('Header')}
                   <span>
                     {column.isSorted?
                      column.isSortedDesc? " ▼": " ▲": ""
                    }
                   </span>
                 </Th>
              ))}
            </Tr>
          ))}
        </THead>
        <TBody primaryColor="#007ACC">
          {page.map((row,index)=> {
            prepareRow(row);

            return (
              <Tr
              {...row.getRowProps()}
              key={index}
              >
                {row.cells.map((cell,index)=> {
                  return (
                    <Td {...cell.getCellProps()} key={index}>
                      {cell.render('cell')}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </TBody>
      </Table>
    </div>
  )
}

export default DataTable
