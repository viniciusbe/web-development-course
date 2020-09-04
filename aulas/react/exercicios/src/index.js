import React from 'react'
import ReactDOM from 'react-dom'
// o nome dos  componentes deve começar com letra maiuscula
import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva"></Pai>
    </div>
    , document.getElementById('root'))