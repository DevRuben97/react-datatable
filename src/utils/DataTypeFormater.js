/* eslint-disable prettier/prettier */
import numeral from 'numeral'

export function formatColumnItem(column, value) {
  let valueFormated

  switch (column.dataType) {
    case 'currency':
      valueFormated = numeral(value).format('$0,0.00')
      break
    case 'component':
        valueFormated= value()
        break
      default: 
        valueFormated= value
        break;
  }

  console.log(column);

  return valueFormated
}
