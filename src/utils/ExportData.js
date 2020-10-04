/* eslint-disable new-cap */
/* eslint-disable prettier/prettier */
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class DataExport {
  constructor(columns, data, tableTitle) {
    this.columns = [...columns]
    this.rows = [...data]
    this.title = tableTitle
  }

  pdf() {
    const document = new jsPdf();
    
    document.text(this.title,105,10, {
        align: 'center'
    });
    
    document.line(5, 12, 200, 12);

    const columnsArray = this.columns.map((item) => item.name)

    const rowsArray = this.rows.map((row) => {
      return Object.keys(row).map((cell) => {
        return `${row[cell]}`
      })
    })

    document.autoTable({
      head: [columnsArray],
      body: rowsArray
    })

    document.save(`${this.title}.pdf`)
  }
}
