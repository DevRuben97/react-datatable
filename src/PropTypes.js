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
    theme: PropTypes.shape({
      primary: PropTypes.string,
      fontFamily: PropTypes.string
    }),
    title: PropTypes.shape({
      label: PropTypes.string.isRequired,
      align: PropTypes.oneOfType(['left','center','Right']),
      icon: PropTypes.func
    }).isRequired,
    rowActions: PropTypes.shape({
      type: PropTypes.oneOfType(['icon','select']),
      actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.func,
        show: PropTypes.bool,
        label: PropTypes.string,
        onClick: PropTypes.func
      }))
    }),
    currency: PropTypes.shape({
      currencyCode: PropTypes.string,
      symbol: PropTypes.string
    }),
    addButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      show: PropTypes.bool
    })
  }).isRequired
}
