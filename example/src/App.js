import React from 'react'
import DataTable from 'react-datatable'
import { get_products } from './Data/Apis'

const columns = [
  {
    name: 'ID',
    fieldId: 'id'
  },
  {
    name: 'Nombre',
    fieldId: 'name',
    filter: true,
    filterType: "textField"
  },
  {
    name: 'Precio',
    fieldId: 'price',
    dataType: 'currency'
  },
  {
    name: 'Costo',
    fieldId: 'cost',
    dataType: 'currency'
  },
  {
    name: 'Impuesto',
    fieldId: 'hasTax',
    dataType: 'boolean'
  },
  {
    name: 'Fecha de Creación',
    fieldId: 'createdDate',
    dataType: 'dateTime',
    filter: true,
    filterType: 'date'
  },
  {
    name: 'Estado',
    fieldId: 'state',
    dataType: 'status',
    filter: true,
    filterType: "select",
    filterData: [{
      label: 'Activo',
      value: 1
    },{
      label: 'Inactivo',
      value: 2
    }],
    labels: [
      {
        label: 'Inactivo',
        color: '#C2251F'
      },
      {
        label: 'Activo',
        color: '#25C21F'
      }
    ]
  }
]

const App = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}></div>
      <DataTable columns={columns} remoteData={get_products} />
    </div>
  )
}

export default App
