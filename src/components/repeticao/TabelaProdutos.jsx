import React from 'react'
import produtos from '../../data/produtos'
import'../repeticao/TabelaProdutos.css'
const TabelaProdutos = (props) => {

    const produtosTable = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 == 0 ? 'Par' : 'Impar'} key={produtos.id}>
                <td >{`${produto.id}`} </td>
                <td>{`${produto.nome}`} </td>
                <td >{`R$: ${produto.preco.toFixed(2).replace('.', '.')}`} </td>
            </tr>
        )
    })
    return (
        <div className='TabelaProdutos' >
            <table >
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Produtos</th>
                </tr>
                {produtosTable}

            </table>


        </div>
    )
}

export default TabelaProdutos