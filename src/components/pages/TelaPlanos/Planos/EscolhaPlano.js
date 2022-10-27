import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Plano from "./Plano"


export default function EscolhaPlano({ img }) {
    const { user, setUser, token, setToken } = useContext(AuthContext)
    const [planos, setPlanos] = useState([{}])
    const header = { headers: { Authorization: `Bearer ${token}` } }
    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships'
        const get = axios.get(URL, header)
        get.then((ress) => {
            setPlanos(ress.data)
        })
        get.catch((err) => console.log(err.response.data.message))
    }, [])
    return (
        <Global>
            <TopBar>
                <p>Escolha seu Plano</p>
            </TopBar>

            <Plano 
            planos={planos}
            />

        </Global>
    )
}

const Global = styled.div`
    height: 100%;
    margin: 0 auto;
`
const TopBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 87px 38px 24px 38px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
`

/*<Link to="/subscriptions/ID_DO_PLANO">
                <BoxPlano>
                    <IconImg>
                        <img src={img} alt="img" />
                    </IconImg>
                    <Preco>
                        <p>R$ 39,99</p>
                    </Preco>
                </BoxPlano>
            </Link>

            <BoxPlano>
                <IconImg>
                    <img src={img} alt="img" />
                </IconImg>
                <Preco>
                    <p>R$ 39,99</p>
                </Preco>
            </BoxPlano>

            <BoxPlano>
                <IconImg>
                    <img src={img} alt="img" />
                </IconImg>
                <Preco>
                    <p>R$ 39,99</p>
                </Preco>
            </BoxPlano> */