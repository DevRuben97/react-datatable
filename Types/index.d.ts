
export interface ReactTableProps<RowData extends object>{

    columns: Column<RowData>[];
    remoteData: ()=> Promise<RowData[]>

}

export interface DataTableOptions{

    title: TableTitle,
    rowActions: DataTableRowActions
}

export interface Column<RowData extends object>{

    name: string;
    fieldId: string;
    filter: boolean;
    filterType: "textField" | "dateTimePiker", "select"
}

export interface TableTitle{
    label: string;
    align: 'left'| 'center'| 'Rigth';
    icon: Function;
}

export interface DataTableRowActions<RowData extends object>{

    type: 'icon' | 'menu',
    actions: RowAction<RowData>[];
}

export interface RowAction<RowData extends object>{
    icon: string;
    show: boolean;
    label: string;
    onClick: (item: RowData)=> void
}