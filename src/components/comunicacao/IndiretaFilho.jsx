import React from 'react'

const IndiretaFilho = (props) => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + 50
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('Joao', gerarIdade(), true)}>Fornecer informações</button>
        </div>
    )
}

export default IndiretaFilho