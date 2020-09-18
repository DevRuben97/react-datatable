/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

import TexBox from './TextBox';
import {Button} from './Button'

const Container= styled.div`
display: flex;
justify-content: space-between;
`


const TableToolBar =(props)=> {



    return (
        <Container>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <TexBox  placeholder="Buscar en todos los campos.."/>
                <Button>Un valor</Button>
            </div>
        </Container>
    )
}

export default TableToolBar;