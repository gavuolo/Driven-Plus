import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function TelaLogin({ icon }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, setUser, token, setToken, addToken } = useContext(AuthContext)
    const navigate = useNavigate()

    function Logar() {
        const body = {
            email: email,
            password: password
        }

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
        const post = axios.post(URL, body)
        
        post.then((ress) => {
            addToken(ress.data.token)
            setUser(ress.data)
            if (ress.data.membership === null) {
                navigate('/subscriptions')
            } else {
                navigate('/home')
            }
        })
        post.catch((err) => {
            if (err.response.status == 422) {
                alert("Usuário não existente. Por favor, faça o cadastro.")
            } else {
                alert(err.response.data.message)
            }
            window.location.reload();
        })
    }
    return (
        <>
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <InputLogin>
                <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputLogin>

            <DivButton>
                <button onClick={Logar}> ENTRAR </button>
            </DivButton>


            <Link to="/sign-up">
                <Text>
                    <p>Não possuí uma conta? Cadastre-se</p>
                </Text>
            </Link>
        </>
    )
}

const Icon = styled.div`
    display: flex;
    justify-content: center;
    padding: 134px 38px 0 38px;
    img{
        width: 299px;
        height: 49px;
    }
`
const InputLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
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
const DivButton = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
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
const Text = styled.div`
    cursor: pointer;
    margin-top: 24px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
`