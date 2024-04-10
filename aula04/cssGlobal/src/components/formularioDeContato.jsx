
import React, { useState } from "react";



function FormularioDeContato() {
    const [nome, setNome] = useState()
    const [contato, setContato] = useState()
    const [mensagem, setMensagem] = useState()

    const handleNome = (e) => {
        setNome(e.target.value)
    }
    const handleContato = (e) => {
        setContato(e.target.value)
    }
    const handleMensagem = (e) => {
        setMensagem(e.target.value)
    }

    function Submit(event) {
        event.preventDefault()
        const objToJSON ={
            nome: nome,
            contato: contato,
            mensagem: mensagem,
        }
        let jsonToSend = JSON.stringify(objToJSON)
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`)
    }
    return(
      <form onSubmit={Submit}>
        <label>
            Nome
            <input onChange={handleNome} type="text" name="nome"/>
        </label>
        <label>
            Contato
            <input onChange={handleContato} type="text" name="contato"/>
        </label>
        <label>
            Mensagem
            <input onChange={handleMensagem} type="text" name="mensagem"/>
        </label>
        <button type="submit">Enviar Contato</button>
      </form>
    )
}
export default FormularioDeContato