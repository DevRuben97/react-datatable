/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'

export const DataTableProps = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    fieldId: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    filter: PropTypes.bool,
    filterType: PropTypes.oneOfType(['textFiled', 'date', 'select']),
    filterData: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })),
    labels: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }))
  })),
  remoteData: PropTypes.func.isRequired,
  options: PropTypes.shape({
    showViewConfig: PropTypes.bool,
    viewsConfig: PropTypes.shape({
      columnsGet: PropTypes.func.isRequired,
      ColumnsEdit: PropTypes.func.isRequired,
      ColumnsCreate: PropTypes.func.isRequired,
      pageCode: PropTypes.string.isRequired,
      level: PropTypes.number
    }),
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
      type: PropTypes.oneOfType(['icon','menu']),
      actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        show: PropTypes.bool,
        label: PropTypes.string,
        onClick: PropTypes.func
      }))
    }),
    currency: PropTypes.shape({
      currencyCode: PropTypes.string,
      symbol: PropTypes.string,
      showCode: PropTypes.bool
    }),
    dateTime: PropTypes.shape({
      format: PropTypes.string,
      location: PropTypes.string
    }),
    addButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      show: PropTypes.bool
    })
  }),
  text: PropTypes.shape({
    dataEmptyText: PropTypes.string,
    dataEmptyFilterText: PropTypes.string,
    loading: PropTypes.string
  }).isRequired
}
