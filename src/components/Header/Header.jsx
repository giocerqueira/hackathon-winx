import React from "react";

import Logo from "../Header/logo.png";
import * as S from "../Header/../Style.jsx";
import Button from "../gerais/button";
import Icon from "../../assets/iconcadastrese.png"


function Header (){
    return(

        <S.Header>
            <S.Img src={Logo} alt="logotipo saúde" />
            <S.Nav>
                <S.Ul>
                    <li>Quem somos</li>
                    <li>Especialidades</li>
                    <li>Unidades</li>
                </S.Ul>
            </S.Nav>
            <Button className={"buttonCad"} path={"/cadastro"} text="CADASTRE-SE" />
        </S.Header>
    )
}

export default Header