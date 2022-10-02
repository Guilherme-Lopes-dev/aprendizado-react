import "./App.css";
import React from "react";
import Input from "./components/Formulario/Input";
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Card from './components/Layout/Card'
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmentos from "./components/basicos/Fragmentos";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#11 - Componente controlado(input)" color="#E8B71A">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação indireta" color="#4A8C4B">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação direta" color="#BC2C0D">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Par ou Impar" color="#3E7633">
                <ParOuImpar numero={9} />
                <UsuarioInfo usuario={{ nome: 'Guilherme' }} />
                <UsuarioInfo usuario={{}} />
            </Card>

            <Card titulo="#07 - Tabela de Produtos" color="#D90CC6">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Lista de Alunos" color="#A5DAE2">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmentos />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);