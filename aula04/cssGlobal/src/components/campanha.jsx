// Crie um CSS Modularizado para um
// componente chamado Campanha.
// • Esse componente exibe na tela uma
// mensagem de acordo com o mês.
// • Essa frase deve ser exibida na cor preta.
// • A cor de fundo de uma tarja (pode ser
// uma div) e a mensagem (dentro da
// tarja) devem mudar de acordo com o
// mês que passamos como prop (string)
// para o componente filho.
// • Setembro -> cor: amarelo, mensagem:
// Prevenção ao suicídio.
// • Outubro -> cor: rosa, mensagem:
// Conscientização sobre o câncer de
// mama.
// • Novembro -> cor: azul, mensagem:
// Prevenção e combate ao câncer de prostata
import React from "react";
import Styles from './campanha.module.css'
function Campanha(props) {
    
    
    return(
        <div>
            {props.mes == 'setembro' && (
                <div className={Styles.yellow}>
                    <p>Prevenção ao suicidio</p>
                </div>
            )}
            {props.mes == 'outubro' && (
                <div className={Styles.pink}>
                    <p>Conscientização sobre o câncer de mama</p>
                </div>
            )}
            {props.mes == 'novembro' && (
                <div className={Styles.blue}>
                    <p>Prevenção e combate ao cancer de próstata</p>
                </div>
            )}
        </div>
        
    )
}
export default Campanha
