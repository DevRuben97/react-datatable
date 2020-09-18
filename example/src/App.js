import React from 'react'
import {DataTable} from 'react-datatable'
import {get_products} from './Data/Apis';

const columns= [{
  name: 'ID',
  fieldId: 'id'
},
 {
  name: "Nombre",
  fieldId: "name"
},
 {
  name: "Precio",
  fieldId: "price",
  dataType: "currency"
},
{
  name: "Costo",
  fieldId: "cost",
  dataType: "currency"
},
{
  name: 'Impuesto',
  fieldId: 'hasTax',
  dataType: 'boolean'
},
{
  name: "Estado",
  fieldId: "state"
}]


const App = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
      <h2>Prueba de la tabla</h2>
      </div>
      <DataTable columns={columns} options={{headerBackground: '#007ACC'}} remoteData={get_products}/>
    </div>
  )
}

export default App
