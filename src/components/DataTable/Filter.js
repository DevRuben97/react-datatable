/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import TextBox from '../TextBox';
import Select from '../Select';
import {Button} from '../Button'

const Container= styled.div`
 display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  padding: 15px 15px;
  /* right: 0; */
`

const ButtonConteiner= styled.div`
display: flex;
justify-content: space-between;
`

const FilterCtiteria= [
{
    label: "Igual Que",
    value: "=="
}, 
{
    label: "Que contenga",
    value: ".Contains()",
    type: "function"
},
{
    label: "Mayor que",
    value: ">"
},
{
    label: "Menor que",
    value: "<"
}]


const Filter= ({item,rows, showFilter})=> {

    function renderFilter(){

        let filterItem= React.Component;
        switch(item.filterType){
            case 'textField': {

                filterItem= (
                    <div style={{margin: 5}}>
                        <TextBox 
                    placeholder={`filtrar por ${item.name}`}
                    />
                    </div>
                )
                break;
            }
            case 'date': {


                break;
            }
            case 'select': {

                const selectItems= rows.map((row)=> {

                    return {
                        label: row[item.fieldId],
                        value: row[item.fieldId]
                    }
                })

                filterItem= (
                    <Select 
                    placeholder={`Filtrar por ${item.name}`}
                    items={selectItems}
                    />
                )

                break;
            }

        }

        return filterItem;
    }

    return (
        <Container show={showFilter}>
            <Select 
            placeholder="Criterio"
            items={FilterCtiteria}
            />
            {renderFilter()}

            <ButtonConteiner>
                <Button outlined>Limpiar</Button>
                <Button>Aplicar</Button>
            </ButtonConteiner>
        </Container>
    )
}

export default Filter;

