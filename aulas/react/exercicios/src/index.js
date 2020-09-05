import React from 'react'
import ReactDOM from 'react-dom'
// o nome dos  componentes deve começar com letra maiuscula
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"></Filho>
            <Filho nome="Paulo" sobrenome="Silva"></Filho>
            <Filho nome="Carla" sobrenome="Silva"></Filho>
        </Pai>
    </div>
    , document.getElementById('root'))