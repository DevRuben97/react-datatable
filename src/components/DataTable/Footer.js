/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import Select from '../Select'
import { Td, Tr } from '../Styled/DataTable'

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    align-items: center;
    align-content: center;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`

const TableFooter = ({
  totalRecords,
  totalPages,
  nextPage,
  currentPage,
  PreviousPage,
  paginate,
  changePageSize
}) => {
  const pages = [
    {
      label: '10',
      value: '10'
    },
    {
      label: '30',
      value: '30'
    },
    {
      label: '50',
      value: '50'
    }
  ]

  return (
    <Tr>
      <Td colSpan={12}>
        <PaginatorContainer>
          {/* Selector de paginas */}
          <Select items={pages}
          placeholder="# Registros por pagina"
          onChangeValue={(event)=> changePageSize(event.target.value)}
          
          />
          {/* Indicador de paginas totales */}
          <p>Hay un total de {totalPages} registros</p>
          {/* Paginador */}
        </PaginatorContainer>
      </Td>
    </Tr>
  )
}

export default TableFooter
