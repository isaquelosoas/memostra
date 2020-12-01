import React from 'react'
import './index.css'
import Button from './../../components/button'

export default class Landing extends React.Component{
       
    render(){
        return(<div className='landing' style={{marginTop:`${this.props.marginTop+50}px`}}><h1>Encontre Pessoas</h1>
            <p>Todo mundo tem algo de bom para oferecer. E aqui você pode dar um match entre a sua necessidade e o talento de alguém ou vice-versa</p>
            <div className='cta-buttons'>
                <Button texto='Explore Talentos' classe='cta-explore' acao={()=>alert('oi')}/>
                <Button texto='Mostre seu Talento' classe='cta-mostre' acao={()=>alert('oi')}/>
            </div> 
            <form>
                <h1>Entrar</h1>
                <fieldset><legend>Email</legend>
                    <input type='email' name='email' />
                </fieldset>
                <fieldset><legend>Senha</legend>
                    <input type='password' name='senha'/>
                </fieldset>
                <div className='auth-buttons'>
                <button className='auth-entrar'>ENTRAR</button>
                <button>REGISTRAR</button>
                </div>
            </form>
            </div>  
        )
    }
}