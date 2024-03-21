import React from 'react'
import Aluno from './components/Aluno'
const App = () => {
  return (
    <div>
      {[
        {nome: "João", email: "joao@gmail.com", curso: "Sistemas", media: 7},
        {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas", media: 9},
        {nome: "Pedro", email: "pedro@gmail.com", curso: "Sistemas", media: 4},
      ].map((aluno) =>
        <Aluno nome={Aluno.nome} curso={Aluno.curso} email={Aluno.email} media ={Aluno.media}/>
      )}
    </div>
  )
}

export default App
