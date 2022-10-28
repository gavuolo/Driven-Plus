import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import "./modal.css"
import axios from "axios"
import { AuthContext } from "../../contexts/AuthContext";

export default function Form({ abrirModal, info, modalIsOpen, setIsOpen }) {
    Modal.setAppElement("body");
    const { token, user, setUser } = useContext(AuthContext)
    const header = { headers: { Authorization: `Bearer ${token}` } }  
    const navigate = useNavigate()
    function fecharModal() {
        setIsOpen(false)
    }

    function Enviar() {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'
        const post = axios.post(URL, form, header)
        post.then((ress) => {
            const novoUser = {...user, membership: ress.data.membership}
            setUser(novoUser)
            navigate('/home')
        })
        post.catch((err)=>{
            alert(err.response.data.message)
            console.log('não comprou')
            console.log(form)
        })
    }

    const [form, setForm] = useState({
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    })

    useEffect(() => {
        let membershipId = info.id
        setForm({ ...form, membershipId })
    },[info])
    
    function Formulario(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <InfoCartao>
                <input
                    name="cardName"
                    type="text"
                    placeholder="Nome impresso no cartão"
                    value={form.cardName}
                    onChange={Formulario}
                    required
                />
                <input
                    name="cardNumber"
                    type="text"
                    placeholder="Digitos do cartão"
                    value={form.cardNumber}
                    onChange={Formulario}
                    required
                />
                <InputMenor>
                    <input
                        name="securityNumber"
                        type="text"
                        placeholder="Código de segurança"
                        value={form.securityNumber}
                        onChange={Formulario}
                        required
                    />
                    <input
                        name="expirationDate"
                        type="text"
                        placeholder="Validade"
                        value={form.expirationDate}
                        onChange={Formulario}
                        required
                    />
                </InputMenor>
            </InfoCartao>

            <Assinar>
                <button onClick={abrirModal}>
                    ASSINAR
                </button>
            </Assinar>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                overlayClassName="modal-overlay"
                className="modal"
            >
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <Nao onClick={fecharModal}>NÃO</Nao>
                <Sim type="submit" onClick={Enviar}>SIM</Sim>
                <Fechar onClick={fecharModal}>x</Fechar>
               
        </Modal>
        </>
    )
}

const InfoCartao = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 299px;
    height: auto;
    input{
        border-radius: 8px;
        width: 299px;
        height: 52px;
        background-color: #FFFFFF;
        margin-bottom: 16px;
        padding: 5%;
        cursor: text;
        color: #7E7E7E;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
`
const InputMenor = styled.div`
    display: flex;
    justify-content: space-between;
    input{
        width: 49%;
    }
`
const Assinar = styled.div`
    button{
        width: 299px;
        height: 52px;
        color: #FFFFFF;
        border: none;
        background-color: #FF4791;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
    }
`

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
const Nao = styled.button`
    margin: 5%;
    width: 95px;
    height: 52px;
    color: #FFFFFF;
    border: none;
    background-color: #CECECE;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
`
const Sim = styled.button`
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