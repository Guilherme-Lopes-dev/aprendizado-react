import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = (props) => {
  //Nome idade nerdola
  
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerdola, setNerdola] = useState(false)

  function fornecerInformacoes(nome, idade, nerdola) {
    setNome(nome)
    setIdade(idade)
    setNerdola(nerdola)
  }
  return (
    <div>
      <span> {nome} </span>
      <span><strong> {idade} </strong></span>
      <span> {nerdola ? 'Verdadeiro' : 'Falso'} </span>

      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}

export default IndiretaPai