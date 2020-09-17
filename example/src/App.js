import React from 'react'
import {DataTable} from 'react-datatable'

const columns= [{
  name: 'ID',
  fieldId: 'id'
},
 {
  name: "Nombre",
  fieldId: "name"
},
 {
  name: "Apellido",
  fieldId: "lastName"
}]


const App = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
      <h2>Prueba de la tabla</h2>
      </div>
      <DataTable columns={columns} options={{headerBackground: '#007ACC'}}/>
    </div>
  )
}

export default App
