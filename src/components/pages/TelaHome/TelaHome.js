import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

export default function TelaHome({ img }) {
    const { user, token } = useContext(AuthContext)
    const [perks, setPerks] = useState([])
    const [imagem, setImagem] = useState([])
    const header = { headers: { Authorization: `Bearer ${token}` } }  
    const navigate = useNavigate()

    useEffect(() => {
        setImagem(user.membership.image)
        setPerks(user.membership.perks)
    }, [perks])

    function alterarPlano() {
        navigate('/subscriptions')
    }

    function cancelarPlano() {
        console.log('cancelar')
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'
        const del = axios.delete(URL, header)
        del.then((ress) => navigate("/subscriptions"))
        del.catch((err) => alert(err.response.data.message))
    }
    
    return (
        <>

            <TopBar>
                <img src={imagem} alt="DrivenPlus Plano" />
                <Icon>
                    <ion-icon name="person-circle"></ion-icon>
                </Icon>
            </TopBar>
            <Text>
                <p>Olá, {user.name}</p>
            </Text>
            <InfoPlano>
                {perks.map((a, index) =>

                    <button key={index}><a href={a.link} target="_blank">{a.title}</a></button>
                )}

            </InfoPlano>

            <BottomBar>
                <button onClick={alterarPlano}>Mudar plano</button>
                <button onClick={cancelarPlano}>Cancelar plano</button>
            </BottomBar>
        </>
    )
}

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px;
    img:first-child{
        width: 74px;
        height: 50px;
    }
`
const Icon = styled.div`
    ion-icon{
        width: 40px;
        height: 40px;
        color: white;
    }
`
const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: white;
`
const InfoPlano = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    button{
        margin: 8px;
        width: 299px;
        height: 52px;
        color: #FFFFFF;
        border: none;
        background-color: #FF4791;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
    }
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
`
const BottomBar = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    button{
        margin: 8px;
        width: 299px;
        height: 52px;
        color: #FFFFFF;
        border: none;
        background-color: #FF4791;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
    }
    & button:nth-child(2){
        background-color: #FF4747;;
    }
`