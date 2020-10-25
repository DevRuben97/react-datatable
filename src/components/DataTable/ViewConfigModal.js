/* eslint-disable no-useless-return */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Button } from '../Button'
import CheckBox from '../Checkbox'
import Loading from '../Loading'
import ConfigContext from '../../contexts/ConfigContext'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

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
  const [isLoading, setIsLoading] = useState(true)
  const { configuation } = useContext(ConfigContext)
  const [data, setData] = useState({ columns: [] })

  const getData = configuation.viewsConfig.columnsGet
  const editData = configuation.viewsConfig.ColumnsEdit
  const createData = configuation.viewsConfig.ColumnsCreate
  const PageCode = configuation.viewsConfig.pageCode
  const level = configuation.viewsConfig.level

  useEffect(() => {
    async function fetch() {
      if (show) {
        setIsLoading(true)
        const { data } = await getData(PageCode, level)
        setData(data)
        setIsLoading(false)
      }
    }
    fetch()
  }, [show])

  function save() {}

  function OnDragFinish(result, columns, setColumns) {
    if (!result.destination) return
  }

  return (
    <Modal showModal={show} CloseModal={onClose}>
      <div style={{ marginBottom: 5 }}>
        <h2>Configuración de la Vista</h2>
      </div>
      <div>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'
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
            <DragDropContext onDragEnd={OnDragFinish}>
              {data.columns.map((index, item) => (
                <Droppable droppableId={item.id} key={index}>
                  <ColumnContainer>{item.name}</ColumnContainer>
                </Droppable>
              ))}
            </DragDropContext>

            <div>
              <Button onClick={save}>Guardar Cambios</Button>
            </div>
          </Fragment>
        )}
      </div>
    </Modal>
  )
}

export default ViewConfigModal
