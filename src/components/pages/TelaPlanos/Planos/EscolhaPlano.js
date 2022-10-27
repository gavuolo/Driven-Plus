import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

export default function EscolhaPlano({ img }) {
    return (
        <Global>
            <TopBar>
                <p>Escolha seu Plano</p>
            </TopBar>

            <Link to="/subscriptions/ID_DO_PLANO">
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
            </BoxPlano>
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