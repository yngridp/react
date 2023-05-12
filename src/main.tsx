import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' //documento de visualizaçao
import App from './App' //componente a utilizar ./ -caminho relativo

ReactDOM.render(   
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement//manipulaçao do dom com id
)
