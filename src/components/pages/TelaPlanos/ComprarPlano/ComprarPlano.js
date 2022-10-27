import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ReactDOM from 'react-dom';
import axios from "axios";
import Form from "./Form";
import InfoPLano from "./InfoPlano";

export default function ComprarPlano({ img, calendar, money , form}) {
    const { token } = useContext(AuthContext)
    const [info, setInfo] = useState([{}])
    const [perks, setPerks] = useState([{}])
    const header = { headers: { Authorization: `Bearer ${token}` } }
    const { idPlano } = useParams();
    //GET plano
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`
        const get = axios.get(URL, header)
        get.then((ress) => {
            setInfo(ress.data)
            setPerks(ress.data.perks)
        })
        get.catch((err) => console.log(err.response.data.message))
    }, [])

    //Modal
    const [modalIsOpen, setIsOpen] = useState(false)
    function abrirModal() {
        setIsOpen(true)
    }
    const navigate = useNavigate()

    return (
        <Global>
            <TopBar>
                <ion-icon onClick={() => navigate('/subscriptions')} name="arrow-back"></ion-icon>
                <img src={img} alt="icon" />
                <p>Driven Plus</p>
            </TopBar>

           <InfoPLano
           info={info}
           setInfo={setInfo}
           calendar={calendar}
           money={money}
           perks={perks}
           />

            <Form 
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            info={info}
            abrirModal={abrirModal}
            />

        </Global>
    )
}
//--------







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
        cursor: pointer;

    }
`
