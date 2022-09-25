import React from "react"

export default function ComParametro(props) {
     const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
     //Se props.nota for maior ou igual a 7 significa que o usuário está aprovado, caso contrário esta em recuperação
     //significado da expressão, interrogação = "significa que" o : quer dizer "caso contrário"
     const notaInt = Math.ceil(props.nota)
     //Propiedades são somente leitura, caso eu precise alterar algo preciso fazer um pre processamento 
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>
                <strong> {props.aluno} </strong>
                 tem nota
                 {notaInt}  
                 e foi
                <strong> { status } </strong>
            </h3> 
        </div>
    )
}