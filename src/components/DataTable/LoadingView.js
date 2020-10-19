/* eslint-disable prettier/prettier */
import React from 'react'
import { Td, Tr } from '../Styled/DataTable'
import Loading from '../Loading'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`

const LoadingView = ({ loadingLabel }) => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loading />
        <Label>{loadingLabel}</Label>
      </div>
    </Container>
  )
}

export default LoadingView
