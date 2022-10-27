import styled from "styled-components"
import { useEffect, useState } from "react";

export default function Form({ abrirModal, info }) {
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