import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

export default function TelaCadastro({ icon }) {
    return (
        <>
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <InputLogin>
                <input
                    type="text"
                    placeholder="Nome"
                />
                <input
                    type="text"
                    placeholder="CPF"
                />
                <input
                    type="text"
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    placeholder="Senha"
                />
            </InputLogin>

            <DivButton>
                <button> CADASTRAR </button>
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