import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react";

export default function InfoPLano({ calendar, money, info, perks }) {
    return (
        <>
            <Info>
                <Titulo>
                    <img src={calendar} alt="calendário" />
                    <p>Benefício:</p>
                </Titulo>
                {perks.map((a, index) => {
                    return (
                        <ComponentBox key={index}>
                            <p>{index + 1}. {a.title}</p>
                        </ComponentBox>
                    )
                })}

                <Titulo >
                    <img src={money} alt="cédula" />
                    <p>Preço:</p>
                </Titulo>

                <ComponentBox>
                    <p>R$ {info.price} cobrados mensalmente</p>
                </ComponentBox>


            </Info>
        </>
    )
}
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 299px;
    height: auto;
    margin-bottom: 34px;
`
const Titulo = styled.div`
    margin-bottom: 10px;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color:#FFFFFF;
    img{
        width: 12px;
        height: 16px;
        margin-right: 5px;
    }
`
const ComponentBox = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    color:#FFFFFF;
    font-size: 14px;
    line-height: 16px;
`