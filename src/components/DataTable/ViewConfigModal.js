/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Button } from '../Button'
import CheckBox from '../Checkbox'
import Loading from '../Loading'

const ColumnContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px 16px;
  margin: 8px;
  text-align: left;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const ViewConfigModal = ({ show, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
      setTimeout(()=> setIsLoading(false),4000)
  })

  return (
    <Modal showModal={show} CloseModal={onClose}>
      <div style={{marginBottom: 5}}>
      <h2>Configuración de la Vista</h2>
      </div>
      <div>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Loading />
          </div>
        ) : (
          <Fragment>
            <p>
              Agrega o remueve columnas a la vista. Para cambiar el orden de las
              columnas. Arrastra y suelta las columnas.
            </p>
            <ColumnContainer>Nombre</ColumnContainer>
            <ColumnContainer>Apellido</ColumnContainer>

            <div>
              <Button>Guardar Cambios</Button>
            </div>
          </Fragment>
        )}
      </div>
    </Modal>
  )
}

export default ViewConfigModal
