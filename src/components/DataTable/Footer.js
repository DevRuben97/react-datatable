/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import Select from '../Select'
import Paginator from './Paginator';
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
  changePageSize,
  icons
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
          <Select
            items={pages}
            placeholder='# Registros por pagina'
            onChangeValue={(event) => changePageSize(event.target.value)}
            disabled={totalRecords === 0}
          />
          {/* Indicador de paginas totales */}
          <p>Hay un total de {totalRecords} registros</p>
          {/* Paginador */}
          <Paginator pages={totalPages} currentPage={currentPage} icons={icons}/>
        </PaginatorContainer>
      </Td>
    </Tr>
  )
}

export default TableFooter
