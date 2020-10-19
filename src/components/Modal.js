/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier

const Conteiner = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  overflow: auto;
  left: 0;
  top: 0;
  bottom:0;
  left:0;  
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Body = styled.div`
  background-color: rgb(246, 246, 246);
  font-family: ${(props) => props.theme.font};
  text-align: center;
  justify-content: center;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  top: 0;
  animation-name: animatetop;
  animation-duration: 0.5s;

  &> p{
    font-size: 25px;
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;


const Modal= ({showModal, CloseModal,...props})=> {


    return (
        <Conteiner show={showModal} onClick={CloseModal}>
            <Body>
                {props.children}
            </Body>
        </Conteiner>
    )
}

export default Modal;