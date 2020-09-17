/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'

export const DataTableProps = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    fieldId: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    filter: PropTypes.bool,
    filterType: PropTypes.oneOfType(['textFiled', 'dateTimePiker', 'select'])
  })),
  remoteData: PropTypes.func.isRequired,
  options: PropTypes.shape({
      headerBackground: PropTypes.string
  })
}
