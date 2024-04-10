import React from "react";
import imagem from "../assets/masqueico.png"
function Home() {
    return(
        <div style={{
            backgroundColor: 'red',
            color: 'blue',
            width: '200px',
            textAlign: 'center'
        }}>
        <p>Eu fazendo este trabalho</p>
        <img src={imagem} alt="eu fazendo este trabalho" />
        </div>
    )
}
export default Home
