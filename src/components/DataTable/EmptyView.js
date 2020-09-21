/* eslint-disable prettier/prettier */
import React from 'react';
import { Td, Tr } from '../Styled/DataTable';
import styled from 'styled-components';

const Container= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Label= styled.label`
font-size: 16px;
margin-left: 5px;
margin-top: 10px;
`

const EmptyView= ({label})=> {


    return (
        <Tr>
            <Td colSpan={12}>
                <Container>
                   <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Label>{label}</Label>
                   </div>
                </Container>
            </Td>
        </Tr>
    )
}

export default EmptyView;