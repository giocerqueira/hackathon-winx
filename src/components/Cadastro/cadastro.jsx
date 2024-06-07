import React from "react";
import Familia from "../../assets/imglogin.png"
import LogoAzul from "../../assets/logoazul.png"
import Button from "../gerais/button";

import * as S from "../StyleCadastro.jsx";



export default function Cadastro(){
    return(
        <>
            <S.Main>
                <S.DivMain>
                    <figure>
                        <S.Img src={LogoAzul} alt="Logo" />
                    </figure>
                    <S.DivTexto>
                        <S.H2>Qual seu CPF/RNE?</S.H2>
                        <S.P>Para sua segurança guardaremos suas informações através do seu CPF. 
                        Caso seja estrangeiro, utilizaremos o seu RNE.
                        </S.P>
                        <S.Input type="text" name="nome" value="" placeholder="Digite seu CPF/RNE" />
                        <S.Button>Próximo</S.Button>
                        {/* <Button path={"/meusDados"} text="Entrar" /> */}
                    </S.DivTexto>
                </S.DivMain>
                {/* <S.DivImg> */}
                    <S.Figure>
                        <S.ImgFamilia src={Familia} alt="Familia"/>
                    </S.Figure>
                {/* </S.DivImg> */}
            </S.Main>


        </>
    );
}


