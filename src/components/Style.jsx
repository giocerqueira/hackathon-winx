import styled, { keyframes } from "styled-components";
import Background from "../assets/headerbackground.png";
import BackgroundMain from "../assets/testebackgroundmain.png";
import FotoHomem from "../assets/fotohomem.png";


// Estilização da header
export const Header = styled.header`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 31vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Source Sans 3", sans-serif;
`;

export const Img = styled.img `
  width: 12vw;
  height: 10vh;
`


// Estilização da nav

export const Nav = styled.nav`
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  color: white;
  font-size: 1.3em;
  width: 100%;
`;

export const buttonCad = styled.button`
  height: 5vh;
  width: 10vw;
  border-radius:10px;
  background-color: #070c71;
  color: white;
  cursor: pointer;
`


// Estilização da main

export const Main = styled.main`
  border: solid green;
  font-family: "Source Sans 3", sans-serif;
  height: 69vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundMain});
  background-size: cover;
  background-position: bottom 50px right 100px;;
  background-repeat: no-repeat;
`

export const Div1 = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`

export const H1 = styled.h1`
  font-size: 2.5em;
`

export const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: solid blue;
  height: 20vh;
`

export const ButtonAgOnline = styled.button`
height: 15vh;
width: 10vw;
background-color: #02026B;
border-radius:20px;
color: white;
font-size: 1.3em;
cursor: pointer;
border: 2px solid transparent;
transition: border 0.3s ease;

  &:hover {
    border: 2px solid greenyellow; /* Borda azul ao passar o mouse */
  }
;

`

export const ButtonAgPresencial = styled.button`
height: 15vh;
width: 10vw;
background-color: #68D4E3;
border-radius:20px;
color: #02026B;
font-size: 1.3em;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  }
  
`

export const SectionMain = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: solid red; 3px;
  width: 100%;
  height: 100%;
`
export const DivMain = styled.div`
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: solid orange;
  padding-top: 4rem;

 /*
 Responsive
 
 display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  padding-top: 5rem; 
  */ 
  
  p {
    font-size:1.1em;
    height:40vh;
    font-size:30px;
    border: solid red;
    width: 100%;
  }

  h2 {
   border-bottom: 3px solid;
   border-image: linear-gradient(90deg, #070c71,  #68d4e3) 1;
   padding-bottom: 20px;
   font-size: 2em;
   font-weight:35;
   width: 100%;
   border: solid blue;
   
}

`

export const DivMain2 = styled.div`
  border: solid pink;
  width: 40%;
  height: 10%;
`

export const DivMain3 = styled.div`
  border: solid salmon;
`
// export const DivGrid = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  border: solid black;
//  width: 50%;
//  /* padding-top:4rem; */

//  img {
//   width: 100%;
//   height: 100%;
//  }
// `

// export const SectionMain = styled.section`
//   border: solid green;
//   width: 50%;
//   display: flex;
// `




// Estilização dos botões da Main 
