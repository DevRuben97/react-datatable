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
      </div>
      <DataTable columns={columns} options={{
        theme: {
          primary: "#007ACC"
        },
        title: {
          label: 'Productos',
          align: 'center'
        }
      }} remoteData={get_products}/>
    </div>
  )
}

export default App
