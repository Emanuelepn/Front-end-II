import React from 'react'
import styled from 'styled-components'
const alunoCard = styled.div`
width: 500px;
padding: 10px 20px;
border: 1px solid;
border-radius: 8px;
`
const Aluno = ({nome, email, curso, media}) => {
  return (
    <><alunoCard>
    <p>Nome: {nome}</p>
    <p>Email: {email}</p>
    <p>Curso: {curso}</p>
    <p>Status: {media >=7 ? <span>aprovado</span> : <span>reprovado</span>}</p>
    <p>-------------------------</p>
      
    </alunoCard></>
  )
}

export default Aluno
