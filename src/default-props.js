import React from 'react';
/* eslint-disable prettier/prettier */
import {TableIcons} from './components/DataTable/Icons';
import { DataTableProps } from './PropTypes';
export const tableDefaultProps= {
    columns: [],
    options: {
        theme: {
            primary: "#007ACC",
            fontFamily: "Segoe UI"
        },
        title: {
            label: "",
            align: "center",
            icon: ()=> null
        },
        currency: {
            currencyCode: "USD",
            symbol: "$",
            showCode: true
        },
        dateTime: {
            format: 'LL',
            location: 'es-do'
        },
        AddButton: {
            label: "",
            onClick: ()=> null,
            show: false
        },
        text: {
            dataEmptyText: "No hay registros en esta tabla",
            dataEmptyFilterText: "No hay registros que conincidan con tus filtros",
            loading: 'Cargando Datos..'
        }
    },
    components: {
        icons: TableIcons
    }
}

export function withDefaultProps(DataTable){

     function DefaultDataTable(props){

        return (
            <DataTable {...props}/>
        )
    }

    DefaultDataTable.propTypes= DataTableProps;
    DefaultDataTable.defaultProps = tableDefaultProps;

    return DefaultDataTable;
}