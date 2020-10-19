/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';



const ViewConfigModal= ({show, onClose})=> {


    return (
        <Modal showModal={show} CloseModal={onClose}>
            <h2>Una Prueba</h2>
        </Modal>
    )
}


export default ViewConfigModal;