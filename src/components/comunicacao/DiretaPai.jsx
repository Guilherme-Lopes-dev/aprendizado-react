import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = (props) => {
  return (
    <div>
        <DiretaFilho nome='Junior' idade={20} nerdola={true}/> 
        <DiretaFilho nome='Guilherme' idade={26} nerdola={false}/>
    </div>
  )
}

export default DiretaPai