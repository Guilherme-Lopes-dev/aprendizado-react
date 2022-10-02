import React from 'react'

const DiretaFilho = (props) => {
  return (
    <div>
    <span>{props.nome} </span>

    <span><strong>{props.idade}</strong></span>

    <span> {props.nerdola ? 'Verdadeiro' : 'Falso'} !</span>

    </div>
  )
}

export default DiretaFilho