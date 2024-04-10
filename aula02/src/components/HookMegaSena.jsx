import React, { useState } from "react";
function HookMegaSena(props)  {
    const [resultado, setResultado] = useState([])
    const [numeroSorteado, setNumeroSorteado] = useState(null)

    function Sorteio() {
        if (resultado.length === 6) {
            alert("Ja temos os 6 numeros sorteados")
        } else {
            let sorteado = Math.floor(Math.random() * 60) + 1
            setNumeroSorteado(sorteado)

            if (!resultado.includes(sorteado)) {
                setResultado([...resultado, sorteado]) 
            } else {
                alert(`O numero ${sorteado} já foi sorteado`)
            }
        }
        
    }
    
    return (
        <div> 
            <h1>Sorteador da Mega em React :</h1>
            <button onClick={Sorteio}>Sortear Número</button>
            {resultado.length > 0 && (
                <div> 
                    <h2>Último Número sorteado: {numeroSorteado}</h2>
                    <h2>Sorteados: {resultado.join(" - ")}</h2>
                </div>
            )}
        </div>
    )
}
export default HookMegaSena

