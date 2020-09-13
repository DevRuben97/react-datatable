import React from 'react'

import DataTable, { ExampleComponent } from 'react-datatable'
import 'react-datatable/dist/index.css'

const columns= [{
  Header: 'ID',
  accessor: 'id'
},
 {
  Header: "Nombre",
  accessor: "name"
},
 {
  Header: "Apellido",
  accessor: "lastName"
}]


const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <DataTable columns={columns}/>
    </div>
  )
}

export default App
