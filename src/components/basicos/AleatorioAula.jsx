import React from "react";

export default props => {
    const min = props.min
    const max = props.max
    const aleatorio =  parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p><strong>Valor min: {props.min}</strong></p>
            <p><strong>Valor max: {props.max}</strong></p>
            <p><strong>Valor escolhido: {aleatorio}</strong></p>

        </div>
    )
}

// const [a, b] = [1, 2]
// const {c, d, x} = { c:12, d:45, x:'teste'}