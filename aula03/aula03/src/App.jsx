import React from 'react'
import Aluno from './components/Aluno'
const App = () => {
  return (
    <div className='alunos'>
      {[
        {nome: "João", email: "joao@gmail.com", curso: "Sistemas", media: 7},
        {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas", media: 9},
        {nome: "Pedro", email: "pedro@gmail.com", curso: "Sistemas", media: 4},
      ].map((aluno) =>
        <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} media ={aluno.media}/>
      )}
    </div>
  )
}

export default App
