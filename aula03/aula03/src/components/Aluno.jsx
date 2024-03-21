import React from 'react'
import "./Aluno.css"


const Aluno = ({nome, email, curso, media}) => {
    console.log(nome, email, curso, media)
    return (
    <>
        <div className="alunoCard" key={nome}>
            <div className="alunoCard-header">
                <p>Nome: {nome}</p>
            </div>
            <div className="alunoCard-contents">
                <p>Email: {email}</p>
                <p>Curso: {curso}</p>
                <p>Status: {media >=7 ? <span>aprovado</span> : <span>reprovado</span>}</p> 
            </div>
        </div>
    </>
  )
}

export default Aluno
