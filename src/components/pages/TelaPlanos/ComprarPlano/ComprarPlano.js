import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CompModal from "./Modal";

export default function ComprarPlano({ img, calendar, money }) {

    //Modal
    const [modalIsOpen, setIsOpen] = useState(false)
    function abrirModal() {
        setIsOpen(true)
    }
    return (
        <Global>
            <TopBar>
                <ion-icon name="arrow-back"></ion-icon>
                <img src={img} alt="" />
                <p>Driven Plus</p>
            </TopBar>

            <Info>
                <Titulo>
                    <img src={calendar} alt="" />
                    <p>Benefício:</p>
                </Titulo>

                <ComponentBox>
                    <p>1. Brindes exclusivos</p>
                    <p>2. Materiais bônus de web</p>
                </ComponentBox>
                <Titulo>
                    <img src={money} alt="" />
                    <p>Preço:</p>
                </Titulo>
                <ComponentBox>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </ComponentBox>
            </Info>

            <InfoCartao>
                <input
                    type="text"
                    placeholder="Nome impresso no cartão"
                />
                <input
                    type="text"
                    placeholder="Digitos do cartão"
                />
                <InputMenor>
                    <input
                        type="text"
                        placeholder="Código de segurança"
                    />
                    <input
                        type="text"
                        placeholder="Validade"
                    />
                </InputMenor>
            </InfoCartao>

            <Assinar>
                <button onClick={abrirModal}>
                    ASSINAR
                </button>
            </Assinar>

            <CompModal
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            >
            </CompModal>

        </Global>
    )
}

//-------------------------------------------------------------------------------------------------
const Global = styled.div`
    width: 299px;
    height: auto;
    margin: 0 auto;
`
const TopBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 87px 38px 24px 38px;
    margin-bottom: 21px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    img{
        width: 139.38px;
        height: 95.13px;
    }
    ion-icon{
        width: 28px;
        height: 28px;
        padding: 22px;
        position: absolute;
        top: 0;
        left: 0;

    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 299px;
    height: auto;
    margin-bottom: 34px;
`
const Titulo = styled.div`
    margin-bottom: 10px;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color:#FFFFFF;
    img{
        width: 12px;
        height: 16px;
        margin-right: 5px;
    }
`
const ComponentBox = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    color:#FFFFFF;
    font-size: 14px;
    line-height: 16px;
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
