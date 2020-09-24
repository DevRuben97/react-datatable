/* eslint-disable prettier/prettier */
import React from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { Th, Td, ActionLink } from '../components/Styled/DataTable'
import { ToolTipConteiner, ToolTipText } from '../components/ToolTip'
import RowActionMenu from '../components/DataTable/RowActionMenu'
import CheckBox from '../components/Checkbox'
import { Tag } from '../components/Tag'
export default class DataTypeFormater {
  constructor(icons, config) {
    this.icons = icons
    this.configuation = config
  }

  formatColumnItem(column, value) {
    let valueFormated
    switch (column.dataType) {
      case 'currency': {
        if (this.configuation.currency) {
          const symbol = this.configuation.currency.symbol
          const currencyCode = this.configuation.currency.currencyCode
          valueFormated = numeral(value).format(`${symbol}0,0.00`)
          if (this.configuation.currency.showCode) {
            valueFormated = currencyCode + ' ' + valueFormated
          }
        } else {
          valueFormated = value
        }
        break
      }
      case 'dateTime': {
        if (this.configuation.dateTime) {
          moment.locale('es-do');
          valueFormated = moment(value).format(this.configuation.dateTime.format);
        } else {
          valueFormated = value
        }
        break
      }
      case 'boolean': {
        valueFormated = <CheckBox checked={value} />
        break
      }
      case 'percentage': {
        valueFormated = numeral(value).format('0.00%')
        break
      }
      case 'status': {
        const labels = column.labels

        if (labels) {
          const label = labels.filter((s) => s.label === value)[0]

          valueFormated = <Tag background={label.color}>{value}</Tag>
        } else {
          valueFormated = value
        }
        break
      }
      default:
        valueFormated = value
        break
    }

    return valueFormated
  }

  renderColumnActions() {
    return <Th style={{ width: '7%' }}>Acciones</Th>
  }

  renderActionsColumn(item) {
    if (this.configuation.rowActions) {
      if (this.configuation.rowActions.type === 'icon') {
        return (
          <Td>
            {this.configuation.rowActions.actions.map((action, index) => (
              <ToolTipConteiner key={index}>
                <ActionLink
                  style={{ paddingRight: 5, cursor: 'pointer' }}
                  onClick={() => action.onClick(item)}
                >
                  {this.icons[action.icon]()}
                </ActionLink>
                <ToolTipText>{action.label}</ToolTipText>
              </ToolTipConteiner>
            ))}
          </Td>
        )
      } else if (this.configuation.rowActions.type === 'menu') {
        const items = this.configuation.rowActions.actions.map((action) => {
          return {
            label: action.label,
            icon: () => this.icons[action.icon](),
            onClick: () => action.onClick(item)
          }
        })

        return <RowActionMenu items={items} icons={this.icons} />
      }
    }
  }
}
