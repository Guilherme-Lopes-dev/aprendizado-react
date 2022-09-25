import React, { useState, useEffect} from 'react'

const Aleatorio = ({min = 0, max = 100}) => {

  const [random, setRandom] = useState(0)
 
  useEffect(() => {
      function createRandom(){
          setRandom(Math.floor(Math.random() * max + min) )
      } 
      createRandom()
  }, [])

  return (
    <><h2>Valor aleatório: {random}</h2>
    <p><strong>Valor min: {min}</strong></p>
    <p><strong>Valor max: {max}</strong></p></>
  )
}

export default Aleatorio