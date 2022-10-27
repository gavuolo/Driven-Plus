import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

export default function Plano({ planos }) {
    return (
        <>
        {planos.map((a, index) =>
        <Link to={`/subscriptions/${a.id}`} key={index}>
            <BoxPlano>
            <IconImg>
                <img src={a.image} alt="img" />
            </IconImg>
            <Preco>
                <p>R${a.price}</p>
            </Preco>
        </BoxPlano>
        </Link>
        )
        }
        </>
    )
}

const BoxPlano = styled.div`
    width: 290px;
    height: 180px;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    cursor: pointer;
`
const IconImg = styled.div`
    width: 50%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
    width: 120px;
    height: 95px;
    }
`
const Preco = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    }
`
