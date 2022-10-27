import styled from "styled-components"
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./pages/contexts/AuthContext";
import GlobalStyle from "./GlobalStyle";
//imagem
import icon from "./images/icon.png"
import img from "./images/Group_1.png"
import money from "./images/money.png"
import calendar from "./images/Calendar.png"

//telas
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import EscolhaPlano from "./pages/TelaPlanos/Planos/EscolhaPlano";
import ComprarPlano from "./pages/TelaPlanos/ComprarPlano/ComprarPlano";
import TelaHome from "./pages/TelaHome/TelaHome.js"


export default function App(){
    return(
    <BrowserRouter>
        <Content>
        <GlobalStyle/>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<TelaLogin icon={icon}/>}/>
                    <Route path="/sign-up" element={<TelaCadastro icon={icon}/>}/>
                    <Route path="/subscriptions" element={<EscolhaPlano img={img}/>}/>
                    <Route path="/subscriptions/:idPlano" element={<ComprarPlano img={img} money={money} calendar={calendar}/>}/>
                    <Route path="/home" element={<TelaHome img={img}/>}/>
                </Routes>
            </AuthProvider>
        </Content>
    </BrowserRouter>
    )
}

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #0E0E13;
`