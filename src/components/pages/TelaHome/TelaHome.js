import styled from "styled-components"

export default function TelaHome({ img }) {

    return (
        <>

            <TopBar>
                <img src={img} alt="icon" />
                <Icon>
                    <ion-icon name="person-circle"></ion-icon>
                </Icon>
            </TopBar>
            <Text>
                <p>Olá, Fulano</p>
            </Text>
            <InfoPlano>
                <button>Solicitar brindes</button>
                <button>Solicitar brindes</button>
                <button>Solicitar brindes</button>
                <button>Solicitar brindes</button>
            </InfoPlano>

            <BottomBar>
                <button>Solicitar brindes</button>
                <button>Solicitar brindes</button> 
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