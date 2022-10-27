import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import axios from "axios";

export default function TelaCadastro({ icon }) {

    const [form, setForm] = useState({ email: "", name: "", cpf: "", password: "" })
    const navigate = useNavigate("/")

    //POST do formulário 
    function Cadastrar() {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up'
        const post = axios.post(URL, form)
        post.then(() => {
            alert("Sucesso! Usuário cadastrado")
            navigate('/')
        })
        post.catch((ress) => {
            alert(ress.response.data.message)
        })
    }

    //Formulário para enviar
    function Formulario(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <InputLogin>
                <input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    value={form.name}
                    onChange={Formulario}
                />
                <IMaskInput
                    mask="000.000.000-00"
                    placeholder="CPF"
                    name="cpf"
                    value={form.cpf}
                    onChange={Formulario}
                />               
                <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={Formulario}
                />
                <input
                    name="password"
                    type="text"
                    placeholder="Senha"
                    value={form.password}
                    onChange={Formulario}
                />
            </InputLogin>
            <DivButton>
                <button onClick={Cadastrar}> CADASTRAR </button>
            </DivButton>
            <Link to="/">
                <Text>
                    <p>Já possuí uma conta? Entre</p>
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
    margin-top: 24px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
`