/* eslint-disable prettier/prettier */
import React from 'react';
import {Tr,Td} from '../Styled/DataTable';
import TextBox from '../TextBox';

const FilterRow= ({columns})=> {

    const [currentValue, setCurrentValue]= useState([]);

    function renderFilter(column){
        switch(column.dataType){
            case 'text':
                return (
                    <TextBox 
                    placeholder={`Buscar por ${column.name}`}
                   />
                )
            case 'dateTime': 
                return (
                    <TextBox 
                    placeholder={`Buscar por ${column.name}`}
                   />
                )
            case 'select': 
                return (
                    <TextBox 
                    placeholder={`Buscar por ${column.name}`}
                   />
                )
        }
    }

    return (
        <Tr>
            {columns.map((column, index)=> (
                <Td key={index}>
                    {renderFilter(column)}
                </Td>
            ))}
        </Tr>
    )
}

export default FilterRow;