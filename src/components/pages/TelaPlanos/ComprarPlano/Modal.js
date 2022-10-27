import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./modal.css"
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function CompModal({modalIsOpen, setIsOpen, form}){
    Modal.setAppElement("body");
    const { token } = useContext(AuthContext)
    const header = { headers: { Authorization: `Bearer ${token}` } }
    function fecharModal() {
        setIsOpen(false)
    }
    
    function Enviar() {
        console.log('oi')
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'
        const post = axios.post(URL, form, header)
        post.then((ress) => {
            console.log('comprou')
            console.log(ress.data)
            

        })
        post.catch((err)=>{
            console.log('não comprou')
            console.log(err.response.data.message)
            console.log(form)
        })
    }
  
    return(
        <>
        
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                overlayClassName="modal-overlay"
                className="modal"
            >
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <Escolha onClick={Enviar}>SIM</Escolha>
                <Escolha onClick={fecharModal}>NÃO</Escolha>
                <Fechar onClick={fecharModal}>x</Fechar>
               
        </Modal>
        </>
    )
}
const Fechar = styled.button`
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    line-height: 0px;
    width: 28px;
    height: 25px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 1;
    right: 0;
    margin: 20px;
    border-radius: 5px;
`
const Escolha = styled.button`
    margin: 5%;
    width: 95px;
    height: 52px;
    color: #FFFFFF;
    border: none;
    background-color: #FF4791;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
`