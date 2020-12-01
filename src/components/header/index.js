import React from 'react'
import './index.css'
import ProfileNav from './../profileNav'

export default class Header extends React.Component{

    render(){        
        return(            
            <header>                
                <h1>MeMostra</h1>                
                <div className='autenticacao'>
                    <a>Entrar</a>
                    <a>|</a>
                    <a>Registrar</a>
                    <ProfileNav />               
                </div>
                <fieldset className='busca'>
                    <input type='text' placeholder='Pesquisar no MeMostra' />                   
                </fieldset>
            </header>
        )
    }
}