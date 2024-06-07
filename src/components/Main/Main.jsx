import React from "react";
import * as S from "../Main/../Style.jsx";
import FotoHomem from "../../components/../assets/fotohomem.png";
import fotosgrid from "../../components/../assets/Grid.png"
import IconCelular from "../../assets/IconCelular.png"
import Grid1 from "../../assets/grid1.png";
import Grid2 from "../../assets/grid2.png";
import Grid3 from "../../assets/grid3.png";
import Grid4 from "../../assets/grid4.png";



function Main() {
  return (

    <S.Main>

      <S.Div1>
        <S.H1>Cuidar da saúde das pessoas para melhorar o mundo.</S.H1>
        <S.Div2>
          <S.ButtonAgOnline>Agendar consulta online</S.ButtonAgOnline>
          <S.ButtonAgPresencial> Agendar consulta presencial</S.ButtonAgPresencial>
        </S.Div2>
      </S.Div1>
      
      {/* <img src={FotoHomem} alt="foto homem negro sorrindo de camisa branca" /> */}
      {/* <S.SectionMain>
        <S.DivMain>
          <h2>Nós acreditamos em um você mais saudável.</h2>
          <p> Na jornada da vida, cada fase tem suas próprias alegrias, 
              desafios e necessidades de saúde, desde a pediatria, focando 
              no crescimento saudável das crianças, até a maternidade, com 
              suporte do pré-natal ao pós-parto, e o cuidado aos idosos, 
              visando manter sua independência e qualidade de vida. 
              Em todas as etapas, estamos comprometidos em oferecer 
              cuidados de saúde compassivos e de alta qualidade para 
              você e sua família.
          </p>
        </S.DivMain>
        <S.DivMain2>
          <img src={Grid1} alt="" />
          <img src={Grid3} alt="" />
          <img src={Grid2} alt="" />
          <img src={Grid4} alt="" />
        </S.DivMain2>
      </S.SectionMain> */}
    </S.Main>
  );
}

export default Main;